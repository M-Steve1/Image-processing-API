import supertest from "supertest";
import app from "../..";

const request = supertest(app);

describe("Test for resize endpoint", () => {
  it("Should return a status code of 200", async () => {
    const response = await request.get("/resize");
    expect(response.status).toBe(200);
  });
});
