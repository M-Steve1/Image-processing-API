import supertest from "supertest";
import app from "../..";

const request = supertest(app);

describe("Test for resize endpoint", () => {
  it("Should return a status code of 200", async () => {
    const response = await request.get("/api/resizeimage?filename=icelandwaterfall.jpg&width=1000&height=500");
    expect(response.status).toBe(200);
  });
});
