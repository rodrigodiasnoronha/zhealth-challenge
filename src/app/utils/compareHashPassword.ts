import { compareSync } from 'bcryptjs';

export const compareHashPassword = (password: string, hash: string) =>
    compareSync(password, hash);
