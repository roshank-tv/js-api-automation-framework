import { expect } from "chai";
import { putRequest } from "../utils/apiClient.js";

describe("UPDATE API Test", () => {
    it("should update an existing post successfully", async () => {
        const updatedPayload = {
            id: 1,
            title: "Updated Post Title",
            body: "This post has been updated",
            userId: 1
        };

        const response = await putRequest("/posts/1", updatedPayload);

        expect(response.status).to.be.equal(200);
    })
})