import { query, param } from "express-validator";

type ValidationType = "indexUsers" | "showUser" | "showRepos";

class UsersValidator {
  validate = (method: ValidationType) => {
    switch (method) {
      case "indexUsers": {
        return [
          query("token").notEmpty().withMessage("Token is required"),
          query("since").notEmpty().withMessage("Since is required"),
        ];
      }
      case "showUser": {
        return [
          query("token").notEmpty().withMessage("Token is required"),
          param("username").notEmpty().withMessage("Username is required"),
        ];
      }
      case "showRepos": {
        return [
          query("token").notEmpty().withMessage("Token is required"),
          param("username").notEmpty().withMessage("Username is required"),
        ];
      }
      default: {
        return [];
      }
    }
  };
}

export default new UsersValidator();
