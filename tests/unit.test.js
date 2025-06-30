const request = require('supertest');
const app = require('../src/app');

describe('Funciones básicas', () => {
  test('Suma válida', async () => {
    const res = await request(app).get('/sum?a=5&b=3');
    expect(res.body.result).toBe(8);
  });

  test('Suma con parámetros inválidos', async () => {
    const res = await request(app).get('/sum?a=a&b=b');
    expect(res.statusCode).toBe(400);
  });

  test('Ruta principal', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('API funcionando');
  });

  test('Ruta inexistente', async () => {
    const res = await request(app).get('/no-existe');
    expect(res.statusCode).toBe(404);
  });

  test('Error lanzado', async () => {
    const res = await request(app).get('/error');
    expect(res.statusCode).toBe(500);
  });
});
