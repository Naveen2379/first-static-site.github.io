"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const OrderPhotoGifts = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_bootstrap_1.Card, null,
            react_1.default.createElement(react_bootstrap_1.Card.Img, { variant: "top", src: "" }),
            react_1.default.createElement(react_bootstrap_1.Card.Title, null, "Photo Gifts"),
            react_1.default.createElement(react_bootstrap_1.Card.Body, null,
                react_1.default.createElement("img", null)),
            react_1.default.createElement(react_bootstrap_1.Button, { variant: "primary" }, "Order Photo Gifts"))));
};
exports.default = OrderPhotoGifts;
