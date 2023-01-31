"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const logo_png_1 = __importDefault(require("../../images/logo.png"));
const GlobalNavigations = () => {
    return (react_1.default.createElement(react_bootstrap_1.Navbar, { bg: "dark", variant: "dark" },
        react_1.default.createElement(react_bootstrap_1.Container, null,
            react_1.default.createElement(react_bootstrap_1.Navbar.Brand, { href: "#home" },
                react_1.default.createElement("img", { alt: "moksha", src: logo_png_1.default, width: "30", height: "30", className: "d-inline-block align-top" }),
                ' ',
                "Moksha Conglomerate"))));
};
exports.default = GlobalNavigations;
