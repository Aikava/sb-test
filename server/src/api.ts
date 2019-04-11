import { Router } from 'express';

const api = Router();

api
  .get('/funds')
  .get('/funds/:id')
  .post('/funds/:id');

export default api;
