import request from "supertest";

import { app } from "../app";

let token: string | undefined;

describe("Users Controller", () => {
  beforeEach(() => {
    token = process.env.GIT_HUB_PERSONAL_ACCESS_TOKEN;
  });

  it("should be able to list users", async () => {
    await request(app).get(`/api/users?since=0&token=${token}`).expect(200);
  });

  it("should be able return error if not send token", async () => {
    await request(app).get("/api/users?since=0").expect(422);
  });

  it("should be able return error if token is invalid", async () => {
    await request(app).get("/api/users?since=0&token=123").expect(400);
  });

  it("shoul be able to show user", async () => {
    const responseUsers = await request(app).get(
      `/api/users?since=0&token=${token}`
    );
    const user = responseUsers.body.payload[0];

    await request(app)
      .get(`/api/users/${user.login}/details?token=${token}`)
      .expect(200);
  });

  it("should be able return user repos", async () => {
    const responseUsers = await request(app).get(
      `/api/users?since=0&token=${token}`
    );
    const user = responseUsers.body.payload[0];

    await request(app)
      .get(`/api/users/${user.login}/repos?token=${token}`)
      .expect(200);
  });
});
