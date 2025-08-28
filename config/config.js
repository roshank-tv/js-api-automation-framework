import dotenv from "dotenv";
dotenv.config ({ path: ".env.test" });

const config = {
    baseURL : process.env.BASE_URL,
    headers : { "Content-Type" : "application/json"}
};

export default config;