const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "233241583373" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_46_08_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0LFxuICAgICAgICAxNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAzMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc2LFxuICAgICAgICAyNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM2LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDcwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDk3LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA3LFxuICAgICAgICA4OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTksXG4gICAgICAgIDYyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjEzLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MixcbiAgICAgICAgMTcyLFxuICAgICAgICA0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMixcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxLFxuICAgICAgICA0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzLFxuICAgICAgICA2NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDYzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpUL3YxbWRzY0Zqa3ppK3IyQkVXTTVucHVJQThRUklUczVHSnBmaEpBbTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTg3MzMwMDI3MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBRTZEQTUzQjlENDUzOEFEQ0ZGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNDI3Njc4OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IHRydWVcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkk3QkxRdTZzVEVDbkFJZzlJZUhjU2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiODBlZWE1NDYtNTM1Ny00YTRjLTljMTgtMTE1Njg0ZTNmZWZiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMixcbiAgICAgIDIzOSxcbiAgICAgIDQzLFxuICAgICAgMTI5LFxuICAgICAgMzQsXG4gICAgICA4OSxcbiAgICAgIDE5LFxuICAgICAgNTAsXG4gICAgICA4LFxuICAgICAgOTgsXG4gICAgICAzNixcbiAgICAgIDkyLFxuICAgICAgMjU1LFxuICAgICAgMTIsXG4gICAgICAxNjIsXG4gICAgICAxODYsXG4gICAgICAxLFxuICAgICAgNjUsXG4gICAgICAxMDUsXG4gICAgICAxNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODIsXG4gICAgICA5OSxcbiAgICAgIDI3LFxuICAgICAgMjExLFxuICAgICAgMTAwLFxuICAgICAgMTI3LFxuICAgICAgMTA1LFxuICAgICAgMjE2LFxuICAgICAgMjI1LFxuICAgICAgNDAsXG4gICAgICAxOTAsXG4gICAgICAyMTIsXG4gICAgICAxOTcsXG4gICAgICA0MCxcbiAgICAgIDIyNyxcbiAgICAgIDI0MixcbiAgICAgIDIwMSxcbiAgICAgIDgxLFxuICAgICAgMjI4LFxuICAgICAgMTEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVWQTRTWUExXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxODczMzAwMjcyMToyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkNyaXN0YWxFXCIsXG4gICAgXCJsaWRcIjogXCIyMDM0ODc0NjM4NjY1OTI6MjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnJnOS9FTkVLM0FtYllHR0JFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyWExkNEtWZEFCM1VhSG5GbHAxYkVFQklKUkZzaHNaZ0hibklBcDhhRURRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInQ0ejJDcGFBYTlPWFcraTB1MUdEdlRHZmpyL24vSkRoV1hBNkxQZWRRRUdVQTd2bTFIbnFFSWU2bWE2M3NDSDlza0RtbFVlWHZqdE95aVlERGJJbUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtxcFA0Vjl2YWNUZjRMdmN0bUU3Z2Ezai9QdzM5c05CN1ViTVhlazJ0L3RxRDJkQ3VlWURyQndCY1crVEJqdzBUeDFselZOMlR0ZUpXdDV2aUxXOWpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjE4NzMzMDAyNzIxOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNDI3Njc4NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhPWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSE9ZLmpzb24iOiAie1wia2V5RGF0YVwiOlwibEFJdzRiS0Iza0N6djE4SkZzNjY2SkZOSnV5eFIxRU5RVllDeW1Vbjh1VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNzI4NjAxMTE0LFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbNiwwLDddfSxcInRpbWVzdGFtcFwiOlwiMTcyMzY3NzQ0Mjk5OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MIKY_CROWN-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Miky_Crown",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
