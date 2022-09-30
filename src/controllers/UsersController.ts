import { Request, Response } from "express";
import { validationResult } from "express-validator";

import { apiMessage } from "../helpers/error";
import api from "../services/api";

export class UsersController {
  async index(req: Request, res: Response) {
    const errors = validationResult(req);
    const { token, since } = req.query;

    if (!errors.isEmpty()) {
      return res
        .status(422)
        .send(apiMessage(false, 422, "Validation error", errors.array()));
    }

    const users = await api.get(`/users?since=${since}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.send(apiMessage(true, 200, "Users", users.data));
  }

  async show(req: Request, res: Response) {
    const errors = validationResult(req);
    const { username } = req.params;
    const { token } = req.query;

    if (!errors.isEmpty()) {
      return res
        .status(422)
        .send(apiMessage(false, 422, "Validation error", errors.array()));
    }

    const findUser = await api.get(`/users/${username}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (findUser.status === 404) {
      return res.send(apiMessage(false, 404, "User not found"));
    }

    return res.send(apiMessage(true, 200, "Show User", findUser.data));
  }

  async showRepos(req: Request, res: Response) {
    const errors = validationResult(req);
    const { username } = req.params;
    const { token } = req.query;

    if (!errors.isEmpty()) {
      return res
        .status(422)
        .send(apiMessage(false, 422, "Validation error", errors.array()));
    }

    const repos = await api.get(`/users/${username}/repos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (repos.status === 404) {
      return res.send(apiMessage(false, 404, "Repositories not found"));
    }

    return res.send(apiMessage(true, 200, "Repositories", repos.data));
  }
}
