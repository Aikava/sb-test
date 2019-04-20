"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = __importStar(require("sequelize"));
function default_1(sequelize) {
    return sequelize.define('donation', {
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
exports.default = default_1;
//# sourceMappingURL=donations.js.map