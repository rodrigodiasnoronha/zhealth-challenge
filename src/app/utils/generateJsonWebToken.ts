import { sign } from 'jsonwebtoken';
import authConfig from '../../config/auth';

export const generateJsonWebToken = (id: string | number) =>
    sign({ id }, authConfig.jwt.secret, {
        expiresIn: authConfig.jwt.expiresIn,
    });
