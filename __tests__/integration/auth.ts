import { createDoctor, deleteAllDoctors } from '../utils';
import request from 'supertest';
import { App } from '../../src/app';

afterEach(async () => await deleteAllDoctors());

it('should be able to log in a doctor', async () => {
    const app = new App();
    const api = request(app.server);

    const doctor = await createDoctor();

    const response = await api
        .post('/login')
        .send({ email: doctor.email, password: '123_123_123' });

    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty('token');
});
