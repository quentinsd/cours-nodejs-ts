"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const WilderSchema = new mongoose_1.Schema({
    name: { type: String, unique: true },
    city: String,
    skills: [{ title: String, votes: Number }],
});
const WilderModel = mongoose_1.default.model("Wilder", WilderSchema);
const wilderDAO = {
    read: () => WilderModel.find().exec(),
    create: (wilderName, city, skills) => {
        return WilderModel.init().then(() => {
            const wilder = new WilderModel({ name: wilderName, city, skills });
            return wilder.save();
        });
    },
    update: (wilderName, city, skills) => WilderModel.updateOne({ name: wilderName }, { city, skills }),
    delete: (wilderName) => WilderModel.deleteOne({ name: wilderName }),
};
exports.default = wilderDAO;
//# sourceMappingURL=wildersDAO.js.map