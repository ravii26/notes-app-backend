import { google } from "googleapis";
const ID =process.env.GOOGLE_CLIENT_ID
const SECRET = process.env.GOOGLE_SECRET
const oauth2client = new google.auth.OAuth2(
  ID,
  SECRET,
  "postmessage"
);

export { oauth2client };
