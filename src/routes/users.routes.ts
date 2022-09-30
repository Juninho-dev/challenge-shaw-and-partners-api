import { Router } from "express";

import { UsersController } from "../controllers/UsersController";
import UsersValidator from "../validators/UsersValidator";

const router = Router();
const usersController = new UsersController();

router.get(
  "/api/users",
  UsersValidator.validate("indexUsers"),
  usersController.index
);
router.get(
  "/api/users/:username/details",
  UsersValidator.validate("showUser"),
  usersController.show
);
router.get(
  "/api/users/:username/repos",
  UsersValidator.validate("showRepos"),
  usersController.showRepos
);

export default router;
