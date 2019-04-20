import Sequelize from 'sequelize';
import { get } from 'config';
import { FundInstance, IDBFund } from 'server/db/funds';
import { DonationInstance, IDBDonation } from 'server/db/donations';
import { IConfig } from 'server/types/application';

const connectionString: IConfig['db']['connectionString'] = get('db.connectionString');
const dbOptions: IConfig['db']['options'] = get('db.options');

const db = new Sequelize(connectionString, dbOptions);

const funds = db.import<FundInstance, IDBFund>('funds');
const donations = db.import<DonationInstance, IDBDonation>('donations');

donations.belongsTo(funds, { as: 'funds', foreignKey: 'fund_id' });
export default { db, funds, donations };
