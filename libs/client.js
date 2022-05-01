import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "united",
  apiKey: process.env.API_KEY,
});
