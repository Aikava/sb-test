import { Router } from 'express';
import Funds from 'server/controllers/funds';
import bodyParser from 'body-parser';

const api = Router();

api
  .get('/funds', Funds.findAll)
  .get('/funds/:fundId', Funds.findOne)
  .post('/funds/:fundId', bodyParser.json(), Funds.addDonation);

export default api;
