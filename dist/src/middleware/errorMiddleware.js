"use strict";
exports.__esModule = true;
exports.errorMiddleware = void 0;
var error_1 = require("../helpers/error");
function errorMiddleware(error, req, res, next) {
    if (error instanceof Error) {
        return res.status(400).send((0, error_1.apiMessage)(false, 400, error.message));
    }
    return next();
}
exports.errorMiddleware = errorMiddleware;
//# sourceMappingURL=errorMiddleware.js.map