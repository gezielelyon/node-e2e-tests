import {
  jest,
  expect,
  test,
  describe
} from '@jest/globals';
import superTest from 'supertest';

import Server from '../../src/server.js';

describe('API E2E Test Suit', () => {
  test('GET /  - should return an array', async () => {
    const response = await superTest(Server).get('/');

    const data = JSON.parse(response.text);

    expect(data).toBeInstanceOf(Array);
  });
  test('POST /  - should save an item and return ok: true', async () => {
    const response = await superTest(Server).post('/').send({
      name: 'Geziel'
    });

    const data = JSON.parse(response.text);

    expect(data).toEqual({ ok: true });
  });
  test('DELETE /  - should save an item and return ok: true', async () => {
    const response = await superTest(Server).delete('/');

    const data = JSON.parse(response.text);

    expect(data).toEqual({ ok: true });
  });
})