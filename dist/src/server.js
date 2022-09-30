"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
require("express-async-errors");
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var errorMiddleware_1 = require("./middleware/errorMiddleware");
var users_routes_1 = __importDefault(require("./routes/users.routes"));
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
app.use(users_routes_1["default"]);
app.use(errorMiddleware_1.errorMiddleware);
app.listen(3333, function () { return console.log("Server is running on port 3333"); });
//# sourceMappingURL=server.js.map