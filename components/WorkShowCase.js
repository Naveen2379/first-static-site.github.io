"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const k1_jpg_1 = __importDefault(require("../images/carousel/k1.jpg"));
const k2_jpg_1 = __importDefault(require("../images/carousel/k2.jpg"));
const k3_jpg_1 = __importDefault(require("../images/carousel/k3.jpg"));
require("./WorkShowCase.scss");
const WorkShowCase = () => {
    const [index, setIndex] = (0, react_2.useState)(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (react_1.default.createElement("div", { className: "showcase-items" },
        react_1.default.createElement(react_bootstrap_1.Carousel, { activeIndex: index, onSelect: handleSelect, variant: "dark" },
            react_1.default.createElement(react_bootstrap_1.Carousel.Item, null,
                react_1.default.createElement("img", { className: "d-block w-100", src: k1_jpg_1.default, alt: "First slide" }),
                react_1.default.createElement(react_bootstrap_1.Carousel.Caption, null,
                    react_1.default.createElement("h3", null, "First slide label"),
                    react_1.default.createElement("p", null, "Nulla vitae elit libero, a pharetra augue mollis interdum."))),
            react_1.default.createElement(react_bootstrap_1.Carousel.Item, null,
                react_1.default.createElement("img", { className: "d-block w-100", src: k2_jpg_1.default, alt: "Second slide" }),
                react_1.default.createElement(react_bootstrap_1.Carousel.Caption, null,
                    react_1.default.createElement("h3", null, "Second slide label"),
                    react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),
            react_1.default.createElement(react_bootstrap_1.Carousel.Item, null,
                react_1.default.createElement("img", { className: "d-block w-100", src: k3_jpg_1.default, alt: "Third slide" }),
                react_1.default.createElement(react_bootstrap_1.Carousel.Caption, null,
                    react_1.default.createElement("h3", null, "Third slide label"),
                    react_1.default.createElement("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur."))))));
};
exports.default = WorkShowCase;
