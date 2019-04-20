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
    return sequelize.define('fund', {
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
exports.default = default_1;
//# sourceMappingURL=funds.js.map