module.exports = {
 config: {
	 name: "rifat",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "rifat") {
 return message.reply({
 body: " 「❥︎----ღ᭄_ʜᴇʏ ..\n❥︎----ღ᭄_  ᴮᴿᴼᵀᴴᴱᴿ❞࿐.♡.\nᥫᩣ 𝗛𝗔𝗡𝗝𝗔𝗟𝗔 𝗥𝗜𝗙𝗔𝗧\n\n𝐁𝐎𝐓𝐎𝐖𝐍𝐄𝐑\n𝗛𝗔𝗡𝗝𝗔𝗟𝗔 𝗥𝗜𝗙𝗔𝗧」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/LCuhLJi.mp4")
 });
 }
 }
}
