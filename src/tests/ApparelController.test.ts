
import request from 'supertest';
import app from '../app';

describe('Apparel API Endpoints', () => {
  it('should update apparel item', async () => {
    const response = await request(app)
      .put('/api/apparel')
      .send({ code: 'A1', size: 'M', quantity: 100, price: 20 });
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Apparel updated successfully');
  });
});
