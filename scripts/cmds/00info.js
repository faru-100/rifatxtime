const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "NTKhang",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const authorName = " ⸙𝐓𝐀𝐌𝐈𝐌༉ ";
		const ownAge = "『 ⸙__18+__⸙ 』";
		const messenger = "https://m.me/rifatxyz";
		const authorFB = "𝗵𝘁𝘁𝗽𝘀://𝘄𝘄𝘄.𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸.𝗰𝗼𝗺/𝗽𝗿𝗼𝗳𝗶𝗹𝗲.𝗽𝗵𝗽?𝗶𝗱=𝟲𝟭𝟱𝟳𝟮𝟯𝟳𝟲𝟳𝟲𝟱𝟱𝟯𝟵";
		const authorNumber = "_01339969000";
		const Status = "𝗨𝗻𝗸𝗻𝗼𝘄𝗻";
		const urls = [
"https://i.imgur.com/BsKOCq6.mp4",
"https://i.imgur.com/BsKOCq6.mp4",
"https://i.imgur.com/BsKOCq6.mp4",
"https://i.imgur.com/BsKOCq6.mp4"
];
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `ღ《 ⩸__𝐁𝐨𝐭 𝐀𝐧𝐝 𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧__⩸ 》⸙
\🤖BOT NAME : ⩸__${global.GoatBot.config.nickNameBot}__⩸
\👾BOT SYSTEM PREFIX : ${global.GoatBot.config.prefix}
\💙 OWNER NAME: ${authorName}
\📝AGE  : ${ownAge}
\💕RELATIONSHIP: ${Status}
\🌐WP : ${authorNumber}
\🌍 FACEBOOK LINK : ${authorFB}
\🗓DATE : ${date}
\⏰NOW TIME : ${time}
\🔰ANY HELP CONTACT :⩸__${messenger}__⩸
\📛BOT I'S RUNNING FOR : ${uptimeString}
    𝑻𝒈: https://t.me/TAMIMOM69
    𝑰𝒏𝒔𝒕𝒂: https://www.instagram.com/tamim_4203?igsh=YzljYTk1ODg3Zg==
    𝑪𝒂𝒑𝑪𝒖𝒕: 𝐓𝐀𝐌𝐈𝐌
    𝑻𝒊𝒌𝑻𝒐𝒌: 𝐍𝐎𝐓 𝐔𝐒𝐈𝐍𝐈𝐆
    𝒀𝒐𝒖𝑻𝒖𝒃𝒆: 𝐆𝐎𝐑𝐈𝐁𝐄𝐑 𝐀𝐁𝐀𝐑 𝐘𝐎𝐔𝐓𝐔𝐁𝐑
\===============`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
