"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.css");
var App_1 = require("./App");
var react_router_dom_1 = require("react-router-dom");
react_dom_1["default"].render(react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
    react_1["default"].createElement(App_1["default"], null)), document.getElementById('root'));
