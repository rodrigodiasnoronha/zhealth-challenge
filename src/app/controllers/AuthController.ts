import { Request, Response } from 'express';
import DoctorModel from '../models/Doctor';
import { compareHashPassword } from '../utils/compareHashPassword';
import { generateJsonWebToken } from '../utils/generateJsonWebToken';

class AuthController {
    async store(request: Request, response: Response) {
        const { email, password } = request.body;

        const checkEmailIsRegistered = await DoctorModel.findOne({ email });

        if (!checkEmailIsRegistered) {
            return response.status(404).json({
                code: 'error/not-found',
                message: 'Cannot find any user with this email',
                statusCode: 404,
            });
        }

        const passMatch = compareHashPassword(
            password,
            checkEmailIsRegistered.password
        );

        if (!passMatch) {
            return response.status(400).json({
                code: 'error/wrong-password',
                message: 'Password does not match',
                statusCode: 400,
            });
        }

        const token = generateJsonWebToken(checkEmailIsRegistered._id);

        return response.json({ token });
    }
}

export default new AuthController();
