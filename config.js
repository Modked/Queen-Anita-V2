//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "masg.mgaass@gmail.com";
global.location = "Sana'a, Yemen";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.apiKey = process.env.API_KEY || "ptlc_XphYaJ0nAphTlV7NoAPdmDjgH1LS1fhItj2pHVqRuQR";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "967772350066";
global.owner = process.env.OWNER_NUMBER || "967772350066";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUxOa1VFanRCRkFERHl2Wlg5MGJPZE52YklxemwxVXNnSE5LQ1BPOFRFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGluMERCZlNBNlNEUnQwRzVZTis2V1kzSDlxOHV0ak5ON3NVdGNEcmIxQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5QnRsbVF0TEVTN3RWKzhXV2VtQThsbDFnS1JJVTByUjd6S0RNZGpMN0U4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0TjJNTDEybUtKdXFQYm1jbmlCYWpiM3VtaUZyd3BrN1lxSUFSdlRzakFzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFMVFJJemFUQXduMWdrcFdldGtjY3NRRTVkVklDWFFyVWxNeHJYbnBtR1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVGR1ZmNmtHckdUVUZBZXBYWjQvQk0yT1JGUTNYb3ZsUlRqS1VIZFlQekk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0NHK3RPZjQvNVpNYmhjaTh4S0Q3UXhvczBEcDRPK3BJSitjbU04Yzhscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkdqcUV0TmlnYi9OWUptekoyM3V4WEF1bVFmTFhocmlmTTFHUXZYS0FVOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFMQUNHQUFnbHRVSEZRcXVYR0RlZFhTdkl4cGxheXl0eDlOL09leTJMK2UzNzh2R3FHUkh2bmcvcGZSNWtBZkQyMDhBTXUyelNKQ1BHcGh5RjNiMWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcyLCJhZHZTZWNyZXRLZXkiOiJ0SWRjMVhoVjRFSlFScjB3YXNCdXFLUkVtYUFwdGhFWWpIbktSTWZ4Q0lzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBaXVsVzhtaFRCR2tEUHZFczljM1h3IiwicGhvbmVJZCI6IjQ2Y2I5YmJiLWFiOGQtNDdiYi04MTBiLTAwYWYwNDliYTFiNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjVk11UUF3THFySXFWOGZ1NHlDNEg5N1RoT3M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVVPSnI0QUdBcXR2WUpyNW1KYjc1WEg2N25RPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjU4WExDTExDIiwibWUiOnsiaWQiOiI5Njc3NzIzNTAwNjY6NjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVGFuamlybyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2ZpM2NvRkVNcTIwN2dHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoia25HanBXaGhBNkxNWm1rb3phL2ZCWml6dHBNTVF6ejFqZHhSVm1Cd3YxOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVDBMVzhjNWt5KzJ1MXBBYkV1b3pYaUo1N1pGTGMzc3B3cGpoZDd6NTVHcXJsNXRUZUdMSHc5VGRLOGJIT3QrVnU5d25lenBaRFQzNkk5SVQxWmI0QUE9PSIsImRldmljZVNpZ25hdHVyZSI6IllrMG1NcEpEL1dOUWlqSUdQQjBkaUNDNUorQzZseGhPZzQ4OFd3K3pxZ1A2RENNZXMyMjdGNkw0UzhNOUdPVWdnUTh3dWt1cnk1WHBkUFI5ZExGOGpRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTY3NzcyMzUwMDY2OjY0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpKeG82Vm9ZUU9pekdacEtNMnYzd1dZczdhVERFTTg5WTNjVVZaZ2NMOWYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjk0MjAxMTh9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "Tanjiro Sama",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
