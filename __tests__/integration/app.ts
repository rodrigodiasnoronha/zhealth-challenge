import { App } from '../../src/app';
import request from 'supertest';

it('should be able to run the application', async () => {
    const app = new App();
    const api = request(app.server);

    expect(2 + 2).toBe(4);
});
