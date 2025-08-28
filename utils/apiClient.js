import fetch from "node-fetch";
import config from "../config/config.js";

export async function getRequest(endpoint) {
    const response = await fetch(`${config.baseURL}${endpoint}`);
    return response;
}

export async function postRequest(endpoint, body) {
    const response = await fetch(`${config.baseURL}${endpoint}`, {
        method: "POST",
        headers: config.headers,
        body: JSON.stringify(body)
    });
    return response;
}

export async function putRequest(endpoint, body) {
    const response = await fetch(`${config.baseURL}${endpoint}`, {
        method: "PUT",
        headers: config.headers,
        body: JSON.stringify(body)
    });
    return response;
}

export async function deleteRequest(endpoint) {
    const response = await fetch(`${config.baseURL}${endpoint}`, {
        method : "DELETE"
    });
    return response;
}