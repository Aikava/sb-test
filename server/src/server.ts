import express from 'express';
import api from 'src/api';
import { get } from 'config';

const server = express();

server
  .use('/', express.static(get('staticDir')))
  .use('/api', api)
  .use((err: any) => console.log);

export default server;
