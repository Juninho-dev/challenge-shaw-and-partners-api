"use strict";
exports.__esModule = true;
var express_validator_1 = require("express-validator");
var UsersValidator = /** @class */ (function () {
    function UsersValidator() {
        this.validate = function (method) {
            switch (method) {
                case "indexUsers": {
                    return [
                        (0, express_validator_1.query)("token").notEmpty().withMessage("Token is required"),
                        (0, express_validator_1.query)("since").notEmpty().withMessage("Since is required"),
                    ];
                }
                case "showUser": {
                    return [
                        (0, express_validator_1.query)("token").notEmpty().withMessage("Token is required"),
                        (0, express_validator_1.param)("username").notEmpty().withMessage("Username is required"),
                    ];
                }
                case "showRepos": {
                    return [
                        (0, express_validator_1.query)("token").notEmpty().withMessage("Token is required"),
                        (0, express_validator_1.param)("username").notEmpty().withMessage("Username is required"),
                    ];
                }
                default: {
                    return [];
                }
            }
        };
    }
    return UsersValidator;
}());
exports["default"] = new UsersValidator();
//# sourceMappingURL=UsersValidator.js.map