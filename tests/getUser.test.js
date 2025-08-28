import { expect } from "chai";
import { getRequest } from "../utils/apiClient.js";

describe("GET API Test", () => {
    it("should fetch user details successfully", async () => {
        const response = await getRequest("/users/1");

        expect(response.status).to.be.equal(200);

        const data = await response.json();

        expect(data).to.have.property("id");
        expect(data.id).to.equal(1);
        expect(data).to.have.property("name");
        expect(data.name).to.be.a("string");
    });
});