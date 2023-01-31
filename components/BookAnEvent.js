"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BookAnEvent = () => {
    return (react_1.default.createElement("div", null,
        "Events",
        react_1.default.createElement("button", null, "Book An Event")));
};
exports.default = BookAnEvent;
