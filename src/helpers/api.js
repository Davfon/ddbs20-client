import axios from "axios";
import { getDomain } from "./getDomain";

// export const api = axios.create({
//   baseURL: getDomain(),
//   headers: { "Content-Type": "application/json" },
// });

export async function apiPost(node, path, data) {
  const promise = await axios.post(`${getDomain()}${node}${path}`, data, {
    headers: { "Content-Type": "application/json" },
  });

  return promise;
}

export async function apiGet(node, path) {
  const promise = await axios.get(`${getDomain()}${node}${path}`, {
    headers: { "Content-Type": "application/json" },
  });

  return promise;
}

export const handleError = (error) => {
  const response = error.response;

  // catch 4xx and 5xx status codes
  if (response && !!`${response.status}`.match(/^[4|5]\d{2}$/)) {
    let info = `\nrequest to: ${response.request.responseURL}`;

    if (response.data.status) {
      info += `\nstatus code: ${response.data.status}`;
      info += `\nerror: ${response.data.error}`;
      info += `\nerror message: ${response.data.message}`;
    } else {
      info += `\nstatus code: ${response.status}`;
      info += `\nerror message:\n${response.data}`;
    }

    console.log(
      "The request was made and answered but was unsuccessful.",
      error.response
    );
    return info;
  } else {
    if (error.message.match(/Network Error/)) {
      alert("The node cannot be reached.\nDid you start it?");
    }

    console.log("Something else happened.", error);
    return error.message;
  }
};
