"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BookAnEvent_1 = __importDefault(require("./BookAnEvent"));
const WorkShowCase_1 = __importDefault(require("../WorkShowCase"));
const ServicesWeOffer = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(BookAnEvent_1.default, null),
        react_1.default.createElement(WorkShowCase_1.default, null)));
};
exports.default = ServicesWeOffer;
