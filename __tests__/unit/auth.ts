import { hashPassword } from '../../src/app/utils/hashPassword';
import { compareHashPassword } from '../../src/app/utils/compareHashPassword';
import { generateJsonWebToken } from '../../src/app/utils/generateJsonWebToken';

it('should be able to hash the password', () => {
    const password = '123_123_123';

    const hashPass = hashPassword(password);
    const passMatch = compareHashPassword(password, hashPass);

    expect(passMatch).toBe(true);
});

it('should be able to generate a JWT Token correctly', async () => {
    const id = 1;

    const token = generateJsonWebToken(id);

    expect(typeof token).toEqual('string');
});
