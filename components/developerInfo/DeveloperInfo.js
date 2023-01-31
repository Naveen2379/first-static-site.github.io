"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./DeveloperInfo.scss");
const DeveloperInfo = () => {
    return (react_1.default.createElement("div", { className: "developer-info" },
        "developed by ",
        react_1.default.createElement("b", null, "@mokshaconglomerate")));
};
exports.default = DeveloperInfo;
