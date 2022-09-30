"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var UsersController_1 = require("../controllers/UsersController");
var UsersValidator_1 = __importDefault(require("../validators/UsersValidator"));
var router = (0, express_1.Router)();
var usersController = new UsersController_1.UsersController();
router.get("/api/users", UsersValidator_1["default"].validate("indexUsers"), usersController.index);
router.get("/api/users/:username/details", UsersValidator_1["default"].validate("showUser"), usersController.show);
router.get("/api/users/:username/repos", UsersValidator_1["default"].validate("showRepos"), usersController.showRepos);
exports["default"] = router;
//# sourceMappingURL=users.routes.js.map