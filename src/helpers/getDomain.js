import { isProduction } from "./isProduction";

/**
 * This helper function returns the current domain of the API.
 * If the environment is production, the production Heroku URL will be returned.
 * Otherwise, the link localhost:8080 will be returned (Spring server default port).
 * @returns {string}
 */
export const getDomain = () => {
  const prodUrl = "https://dds20-server.herokuapp.com"; // TODO: insert your groups heroku prod url for server (once deployed)
  const devUrl = "http://localhost:80";

  return isProduction() ? prodUrl : devUrl;
};
