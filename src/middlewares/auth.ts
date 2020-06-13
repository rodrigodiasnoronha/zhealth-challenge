import { NextFunction, Request, Response } from 'express';
import DoctorModel, { IDoctor } from '../app/models/Doctor';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

type AuthRequest = Request & { user: IDoctor | null };
interface Payload {
    id: string;
}

class AuthMiddleware {
    async authenticated(
        request: AuthRequest,
        response: Response,
        next: NextFunction
    ) {
        const { authorization } = request.headers;

        if (!authorization) {
            return response.status(401).json({
                code: 'error/unauthorized',
                message: 'Authorization not provided',
                statusCode: 401,
            });
        }

        const [, token] = authorization.split(' ');

        if (!token) {
            return response.status(401).json({
                code: 'error/unauthorized',
                message: 'Token not provided',
                statusCode: 401,
            });
        }

        try {
            const payload = verify(token, authConfig.jwt.secret);
            const { id } = payload as Payload;

            const user = await DoctorModel.findById(id);
            if (!user) throw new Error();

            request.user = user;
            return next();
        } catch (err) {
            return response.status(401).json({
                code: 'error/unauthorized',
                message: 'Token not provided',
                statusCode: 401,
            });
        }
    }
}

export default new AuthMiddleware();
