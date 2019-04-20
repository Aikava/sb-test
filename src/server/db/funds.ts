import * as Sequelize from 'sequelize';

export interface IDBFund  {
  id?: number;
  name: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  minDonation: number;
  maxDonation: number;
}

export type FundInstance = Sequelize.Instance<IDBFund>;
export type FundModel = Sequelize.Model<FundInstance, IDBFund>;

export default function (sequelize: Sequelize.Sequelize): FundModel {
  return sequelize.define(
    'fund',
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: Sequelize.STRING,
      shortDescription: {
        type: Sequelize.TEXT,
        field: 'short_description'
      },
      description: Sequelize.TEXT,
      imageUrl: {
        type: Sequelize.STRING,
        field: 'image_url'
      },
      minDonation: {
        type: Sequelize.INTEGER,
        field: 'min_donation'
      },
      maxDonation: {
        type: Sequelize.INTEGER,
        field: 'max_donation'
      }
    }, {
      underscored: true,
      timestamps: false,
      freezeTableName: true,
      tableName: 'funds'
    });
}
