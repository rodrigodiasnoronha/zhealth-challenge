import request from 'supertest';
import { App } from '../../src/app';
import { hashPassword } from '../../src/app/utils/hashPassword';
import { deleteAllDoctors } from '../utils';

afterEach(async () => await deleteAllDoctors());

it('should be able to create one doctor', async () => {
    const app = new App();
    const api = request(app.server);

    const response = await api.post('/doctors').send({
        name: 'doctor name',
        cpf: '12312312312',
        birth: new Date(25, 9, 1999),
        crm: 12312312312,
        crm_state: 'DF',
        gender: 'M',
        email: 'doctor@email.com',
        password: hashPassword('123456789'),
    });

    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('doctor name');
});
