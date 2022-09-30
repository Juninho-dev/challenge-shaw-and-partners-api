"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var axios_1 = __importDefault(require("axios"));
var app = axios_1["default"].create({
    baseURL: "https://api.github.com",
    headers: {
        Accept: "application/vnd.github+json"
    }
});
exports["default"] = app;
//# sourceMappingURL=api.js.map