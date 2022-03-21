import Server from './server.js';

const server = Server.listen(3333).on('listening', () => {
  console.log(`🔥 Server started on port ${server.address().port}`);
});
