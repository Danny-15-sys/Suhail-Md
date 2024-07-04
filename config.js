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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_24_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDg1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMixcbiAgICAgICAgMjM3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDYyLFxuICAgICAgICAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEzLFxuICAgICAgICAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxODksXG4gICAgICAgIDEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTksXG4gICAgICAgIDExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MixcbiAgICAgICAgMixcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2NixcbiAgICAgICAgNjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjksXG4gICAgICAgIDMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDksXG4gICAgICAgIDM1LFxuICAgICAgICA1NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAyLFxuICAgICAgICAzMixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDk4LFxuICAgICAgICA0MixcbiAgICAgICAgODQsXG4gICAgICAgIDI1LFxuICAgICAgICAzOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIktzNnF6WHRQaERmUDBDWWo1b2ZHVDdEVkR3Ny9WMjlxOFpJRmdoRDYzbUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm0ydXRFMUVJUlNxd3ZDM21PRkdObmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWFhNmUyNTItMmU4Yy00ZTVkLTk4MWQtM2U4NDZmYjJmMDE2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNyxcbiAgICAgIDIyOCxcbiAgICAgIDIwMyxcbiAgICAgIDIwOSxcbiAgICAgIDE2MyxcbiAgICAgIDEyMixcbiAgICAgIDE3OSxcbiAgICAgIDE0NixcbiAgICAgIDI1MSxcbiAgICAgIDEyNSxcbiAgICAgIDMxLFxuICAgICAgNzQsXG4gICAgICAxMjAsXG4gICAgICAyMzAsXG4gICAgICAxODAsXG4gICAgICAxNDIsXG4gICAgICA0NyxcbiAgICAgIDEsXG4gICAgICAxMzAsXG4gICAgICAxOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzYsXG4gICAgICAxNjMsXG4gICAgICAxNTEsXG4gICAgICAxMzIsXG4gICAgICA3LFxuICAgICAgODEsXG4gICAgICA4MCxcbiAgICAgIDEyOCxcbiAgICAgIDQxLFxuICAgICAgMTgzLFxuICAgICAgNyxcbiAgICAgIDEzNyxcbiAgICAgIDEzNixcbiAgICAgIDE3NyxcbiAgICAgIDE1LFxuICAgICAgMjI2LFxuICAgICAgMTk4LFxuICAgICAgMTI3LFxuICAgICAgNTksXG4gICAgICAzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOQ0c2WDkxUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxOTExOTQ2Njo2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjYwMzg2Njg3MjkxNTYyOjY1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01hTXpZZ0ZFUFdKbkxRR0dCRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVmhjY29mWmptME5NOWtEc1BVRHM5c1R3TTZkYU4zamRCZXFwdnRWWllBaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvaGJHQ1IyMUdrSUsvNHZDZlo5Y1dnM1QrS280TkQrY2tyVGlUQmxyRHQzYnNVUnd6a0prSmtia1A4RGJ4ZHFMUmY4Y29kaDF1dmVpSlNaUytMUUtDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5emlVaUdZSXJnaThDQVB6YjdGeXFlaVpuR0RyNVdQYkhaeGpqcWcvc2Z5Skd1cXpXMUN1dGpKWmtTOE43dVFnRDA5cllyMzNWVTR2bHJvaEJSS1FBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDE5MTE5NDY2OjY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTI0NjY0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Danny is king 👑❤️💐",
  ownername:process.env.OWNER_NAME|| "Danny 🐐🖤",


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
