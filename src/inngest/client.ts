import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "my-app",
  baseUrl: process.env.INNGEST_BASE_URL,
  signingKey: process.env.INNGEST_SIGNING_KEY,
  eventKey: process.env.INNGEST_EVENT_KEY,
});
