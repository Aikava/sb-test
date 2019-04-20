import { Request, Response } from 'express';
import db from 'server/db';
import { IDBFund } from 'server/db/funds';

interface IFundsByKey {
  [key: number]: IDBFund;
}

export default class Funds {
  public static async findAll(req: Request, res: Response) {
    // @ts-ignore
    const all: Array<IDBFund> = await db.funds.findAll();

    res.json(all.reduce((funds: IFundsByKey, fund: IDBFund) => {
      funds[fund.id] = fund;
      return funds;
    }, {}));
  }

  public static async findOne(req: Request, res: Response) {
    const { params: { fundId } } = req;
    const one = await db.funds.findOne({ where: { id: parseInt(fundId) }, raw: true } as any);

    if(!one) {
      res.sendStatus(404);

      return;
    }

    res.json(one);
  }

  public static async addDonation(req: Request, res: Response) {
    const { params: { fundId }, body: { donationSum, email } } = req;

    if(!(fundId >= 0 && donationSum && email)) {
      res.sendStatus(400);

      return;
    }

    const parsedFundId = parseInt(fundId);
    const isFundExist = await db.funds.findOne({
      where: { id: parsedFundId },
      attributes: []
    } as any );

    if(!isFundExist) {
      res.sendStatus(404);

      return;
    }

    try {
      await db.donations.create({ fundId: parsedFundId, donationSum, email });
      res.json({ status: true });
    } catch (err) {
      res.status(400).json(err);
    }
  }
}
