"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("server/db"));
class Funds {
    static async findAll(req, res) {
        const all = await db_1.default.funds.findAll();
        res.json(all.reduce((funds, fund) => {
            funds[fund.id] = fund;
            return funds;
        }, {}));
    }
    static async findOne(req, res) {
        const { params: { fundId } } = req;
        const one = await db_1.default.funds.findOne({ where: { id: parseInt(fundId) }, raw: true });
        if (!one) {
            res.sendStatus(404);
            return;
        }
        res.json(one);
    }
    static async addDonation(req, res) {
        const { params: { fundId }, body: { donationSum, email } } = req;
        console.log(req.body, req.params);
        if (!(fundId >= 0 && donationSum && email)) {
            res.sendStatus(400);
            return;
        }
        const parsedFundId = parseInt(fundId);
        const isFundExist = await db_1.default.funds.findOne({
            where: { id: parsedFundId },
            attributes: []
        });
        if (!isFundExist) {
            res.sendStatus(404);
            return;
        }
        try {
            await db_1.default.donations.create({ fundId: parsedFundId, donationSum, email });
            res.json({ status: true });
        }
        catch (err) {
            res.status(400).json(err);
        }
    }
}
exports.default = Funds;
//# sourceMappingURL=funds.js.map