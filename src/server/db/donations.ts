import * as Sequelize from 'sequelize';

export interface IDBDonation {
  id?: number;
  fundId: number;
  donationSum: number;
  email: string;
}

export type DonationInstance = Sequelize.Instance<IDBDonation>;
export type DonationModel = Sequelize.Model<DonationInstance, IDBDonation>;

export default function (sequelize: Sequelize.Sequelize): DonationModel {
  return sequelize.define(
    'donation',
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      fundId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'fund_id'
      },
      donationSum: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'donation_sum'
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }, {
      underscored: true,
      timestamps: false,
      freezeTableName: true,
      tableName: 'donations'
    });
}
