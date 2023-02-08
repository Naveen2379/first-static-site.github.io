"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AboutUs_1 = __importDefault(require("../aboutUs/AboutUs"));
const DeveloperInfo_1 = __importDefault(require("../developerInfo/DeveloperInfo"));
require("./FooterInfo.scss");
const FooterInfo = () => {
    return (react_1.default.createElement("div", { className: "footer-info" },
        react_1.default.createElement("hr", null),
        react_1.default.createElement("div", { className: "about-developer-info" },
            react_1.default.createElement(AboutUs_1.default, null),
            react_1.default.createElement(DeveloperInfo_1.default, null))));
};
exports.default = FooterInfo;
