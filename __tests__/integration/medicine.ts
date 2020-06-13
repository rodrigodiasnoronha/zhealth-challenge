import request from 'supertest';
import { App } from '../../src/app';
import { deleteAllMedicines} from '../utils';

afterEach(async () => await deleteAllMedicines());

it('should be able to create a medicine', async () => {
    const app = new App();
    const api = request(app.server);

    const data = { name: 'Dipirona', description: 'Uso adulto' };
    const response = await api.post('/medicines').send(data);

    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual(data.name);
});
