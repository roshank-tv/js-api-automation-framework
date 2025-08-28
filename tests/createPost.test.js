import { expect } from "chai";
import { postRequest } from "../utils/apiClient.js";

describe("POST API Test", () => {
    it("should create a new post successfully", async () => {
        const payload = {
            title : "Post API Test",
            body : "First Post request.",
            id : 3
        };

        const response = await postRequest("/posts", payload);

        expect(response.status).to.equal(201);
        const data = await response.json();

        expect(data).to.have.property("id");
        expect(data.id).to.be.a("number");
    });
});
