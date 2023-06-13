const express = require('express');
const app: Express.Application = express();
const http = require('http');
const server = http.createServer(app);



server.listen(8888, () => {
  console.log('8888포트에서 시작');
})