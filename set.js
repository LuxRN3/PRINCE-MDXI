
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA61UW4+iSBj9L/XaZuQqYNLJIih4xRa1xc0+lFQBpXKxqhBh4n/fYHfvTDKzM73J8gRVxVfnfN855yvIcsLwFNeg/xUUlFwhx+0rrwsM+mBQRhGmoAMQ5BD0wZMlT4xgcfaK5Wl4HOzo5YLPDlsvL+7KWS9vTe4J3TyLiLx5BvcOKMrDmYS/KHhejKrlJfPqKyoUH2/dIL/Ng1M21p3lxUhR+orrnTlVslPwDO5tRUgoyeJhkeAUU3ie4noJCf0cfDJfBPYxCIQMN811cw6I26j0OLK56LA6tk150qWRODvuhp+D7z0FZfeQa5Vn4unNN/cNtdPXZRF6YvCyFdJKX99scZvc5Hf4jMQZRmOEM054/em+bxZ1fiot09wt1OvRXCeu5erInAwOiivE0CnU+Sj1mmqyY58Dri27UqCQQ3Seb9WXFS/HCa3cDTsMwtML2i4OgbKvSOBVN/174Ev6oZXTf+m7NZmPrsSaxfpBvNaENnN/qK6wWonj8e52uhkLvqlr2vOk4HPww4jQMB8Fr8LKl7f+xtlUuz00rfrgOeRCpjoUVuudMrft8Bt8yEv6K5TOwdCp6jeeaQ8btam1NNtdHCSd9iU6IZZVK39bVVGpksAcKdZEMsz96gnHVjOn+f5YyU5YDJkJn9Rrd7e5JDlFhRk/PxidcD1GoC/eO4DimDBOISd51q5pegdAdPVxSDF/dBc0T6Ow65wYHl1sepuyyVD3oYSmeVxXAbn4SN9WTG8mL0nwDDqgoHmIGcPIJYzntJ5jxmCMGej/+RhUy5niNOd4QhDoA0lVNFnvybLYk/9gX6oEcgaL4kuGOeiAiObpHIM+pyXugMcPqmapumSoliaog6GuqCNVU0RTUTV5YA4Mu2WYvl26JilmHKYF6IuaKvSEnqGI987/g0MfCZoo2IZgybI9soeSZcmqqVk93TBMYyD9Bod0/6sDMnzjbzJumy+LHRARyvgmK4tzDtGHxj82YRjmZcb9Ogut9gVT0P9uGXNOspi1zMoM0jAhV2y1PEA/gmeG/5k3phh9cHnPMCtHrQw31nb3Ki5HoMXeFvqhN32p92N7zm/HNEmXREkTjZ6qa0J7st3ogAy2xcBq0fbkHW1bHGEOyZm1ppxnZa4o9nAxGyvzseOY49i0YhN8Y/dhmjdVqk6NvCBayhvM4sshwGs3lj1nNDskWTjO6IRJo7Gelftm/vyTIqAP0BHXJ16aW0aE1LvqtotW4qqKjrJ0RnV5NZ4CaYjmvKtONocxms2M2bG3vgziqa8W12U+HahYdnU4mk+uiZezF+T3bPO5vQ3hKwnx95cx241fUFEhK0/2heIODqxs3MAU8sKxd3g6qAvv5G+ziL0OYUA4mhWzxrai9eLABi/R1bBiVndVjgyqWgj6VQODQfVm50ecnN9jnLw7jTw+I4Ifqfg+gN/O8Q14Kzfh3vmuxnvO/ktWDfCKZevUbQzRpeNpKrmnm7JoksSXlL1sTXr1YZH4y4mWhg24t7ovzpBHOU1BH8AM0fyhEpqXrX7HWZT/Kr5NYfwRZGfIuPnNEz+xmay/nVrSvHAhS0AfiFMlcZVW4LVZFD6H/MNiwGwfq07B/W9ICdIojAgAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "254738633163", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
