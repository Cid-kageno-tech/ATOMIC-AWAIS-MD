const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "enter your session",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://endpoint.web.id/server/file/8pBiiohWNq6V5rz.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "𝗦𝗵𝗮𝗱𝗼𝘄 𝙚𝙨𝙩 𝙥𝙧ê𝙩 𝙥𝙤𝙪𝙧 𝙫𝙤𝙪𝙨 𝙖𝙞𝙙𝙚𝙧💁‍♂️",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || "$",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "𝄈➽✦𝄆𝗔𝗧𝗢𝗠𝗜𝗖𝄇✦➲",
};
