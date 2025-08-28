import { expect } from "chai";
import { deleteRequest } from "../utils/apiClient.js";

describe("DELETE Post API Test", () => {
  it("should delete a post successfully", async () => {
    const response = await deleteRequest("/posts/1");

    expect(response.status).to.be.equal(200);

    const data = await response.text();

    expect(data === "" || data === "{}").to.be.true;
  });
});
