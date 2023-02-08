"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
require("./BookAnEvent.scss");
const bookEventGifts_json_1 = __importDefault(require("../../configJSON/bookEventGifts.json"));
const eventImg_jpg_1 = __importDefault(require("../../images/eventImg.jpg"));
const BookAnEvent = () => {
    const services = bookEventGifts_json_1.default.services;
    console.log('services ', services);
    return (react_1.default.createElement("div", { className: "services" }, services.map((service) => {
        const { name, variant, events, btn } = service;
        return (react_1.default.createElement(react_1.default.Fragment, { key: name },
            react_1.default.createElement(react_bootstrap_1.Card, { bg: variant.toLowerCase(), key: variant, text: variant.toLowerCase() === 'light' ? 'dark' : 'white', style: { width: 'styles.width' }, className: "service" },
                react_1.default.createElement(react_bootstrap_1.Card.Header, null, name),
                react_1.default.createElement(react_bootstrap_1.Card.Img, { variant: "top", alt: "eventsPhto", src: eventImg_jpg_1.default }),
                react_1.default.createElement(react_bootstrap_1.Card.Body, null,
                    react_1.default.createElement("ul", { className: `${events.length > 5 ? "itemListColumn" : "itemList"}` }, events.map((event) => {
                        return react_1.default.createElement("li", { className: "" }, event.name);
                    })),
                    react_1.default.createElement(react_bootstrap_1.Button, { variant: "primary" }, btn.value)))));
    })));
};
exports.default = BookAnEvent;
