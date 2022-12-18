import supertest from 'supertest';
import app from '../..';

const request = supertest(app);

describe('Test for resize endpoint', () => {
  const fileName = 'icelandwaterfall.jpg';
  const width = 200;
  const height = 300;
  const url = `/api/resizeimage?filename=${fileName}&width=${width}&height=${height}`;
  it('Should return a status code of 200', async () => {
    const response = await request.get(url);
    expect(response.status).toBe(200);
  });
});
