"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wildersDAO_1 = __importDefault(require("../dao/wildersDAO"));
const wilderServices = {
    read: () => {
        return wildersDAO_1.default.read();
    },
    create: (wilderName, city, skills) => wildersDAO_1.default.create(wilderName, city, skills),
    update: (wilderName, city, skills) => wildersDAO_1.default.update(wilderName, city, skills),
    delete: (wilderName) => wildersDAO_1.default.delete(wilderName),
};
exports.default = wilderServices;
//# sourceMappingURL=wilderServices.js.map