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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_04_09_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDgzLFxuICAgICAgICA2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDExLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDM4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUyLFxuICAgICAgICA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNixcbiAgICAgICAgMTY5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MixcbiAgICAgICAgNjAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4LFxuICAgICAgICAzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDUxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNixcbiAgICAgICAgNjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDI2LFxuICAgICAgICA2NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMQXIwUFdPdElIUHhxVnYzVGpDL29Zd3NsODYvb2JoL2pIamN0aWxMVEtrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHWlJESzNwV1JWcTIybDVCWXpzVXJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjdjMmRjMTQ2LTRiMDctNDkzNC04OWE1LTc5ODQxYjkyOGZkN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMyxcbiAgICAgIDY3LFxuICAgICAgMTA5LFxuICAgICAgOTIsXG4gICAgICAyMjMsXG4gICAgICAzLFxuICAgICAgMjA0LFxuICAgICAgMTIwLFxuICAgICAgMjE2LFxuICAgICAgNTUsXG4gICAgICAxOTksXG4gICAgICAxNDAsXG4gICAgICA0NixcbiAgICAgIDYsXG4gICAgICA2LFxuICAgICAgNzcsXG4gICAgICAxMzEsXG4gICAgICA2OSxcbiAgICAgIDU5LFxuICAgICAgMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICAxNjIsXG4gICAgICAxODcsXG4gICAgICAyMzMsXG4gICAgICAxNDIsXG4gICAgICAyMSxcbiAgICAgIDE1LFxuICAgICAgMTk2LFxuICAgICAgOTksXG4gICAgICA4MSxcbiAgICAgIDYzLFxuICAgICAgMTY3LFxuICAgICAgMTIwLFxuICAgICAgMTUxLFxuICAgICAgMTQ5LFxuICAgICAgMSxcbiAgICAgIDQ1LFxuICAgICAgMjIwLFxuICAgICAgMTI2LFxuICAgICAgOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRUJKNUNTOUhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzI0MTU4MzM3MzoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjg5NjAxMjkxMzA1MDU6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVRDbDdvT0VLL052TGNHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4RzgyeTZWRjZtS0hGVktYZnE3SmU1MWN4NlpNWVFRRzhYZlE0Ly92WHhBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm1Ma1EvQ0NzeTNIN3hrVzFHTk15WE5FK09nWTU3SkNGRmZxN0V0bmw3djVkWERHZGx4Y09BVlNnclBVSGhGcVg0TVA3RXROdTBzclN2aGswaGIrRkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1JS1pseUVuUTdhREJnSDE0dU83MUxZaERWS1J0d0tCWDV2YU8vYk1kTXlsYzlDbDRKaDhhUHE0enh4dG5VTDFsMDU5UmFrU3N6V0w1dnFXMTBrcEJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI0MTU4MzM3MzoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjk0OTA0NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU92V1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3ZXLmpzb24iOiAie1wia2V5RGF0YVwiOlwicVBRRkhyRU9MNmpxYXJXLzNNbkJESU9xMVZIQ0hkTnZnVDlCaUsvRUlFUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozODgwMTE2NDg0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjY5MjgxNzc0NTdcIn0iCn0="  // PUT your SESSION_ID 


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
