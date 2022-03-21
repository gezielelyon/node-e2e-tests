import { createServer } from 'http';
import { once } from 'events';
import { randomUUID } from 'crypto';

const Database = new Map();

function responseWithJSONStringifyFormat(data, response) {
  return response.end(JSON.stringify(data));
}

async function handler (request, response) {
  const { method } = request;

  if (method === 'GET') {
    return responseWithJSONStringifyFormat([...Database.values()], response);
  }

  if (method === 'POST') {
    const body = JSON.parse(await once(request, 'data'));

    const newId = randomUUID();
    Database.set(newId, body);

    return responseWithJSONStringifyFormat({ ok: true }, response);
  }

  if (method === 'DELETE') {
    Database.clear();

    return responseWithJSONStringifyFormat({ ok: true }, response);
  }
}

export default createServer(handler);