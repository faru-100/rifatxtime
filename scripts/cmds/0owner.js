const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
config: {
  name: "owner",
  aurthor:"Tokodori",// Convert By Goatbot Tokodori 
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "admin",
  guide: "{pn}"
},

  onStart: async function ({ api, event }) {
  try {
    const ownerInfo = {
      name: '𝗛𝗔𝗡𝗝𝗔𝗟𝗔 𝗥𝗜𝗙𝗔𝗧',
      gender: '𝗠𝗔𝗟𝗘',
      age: '𝟭𝟵+',
      height: '𝗨𝗻𝗸𝗻𝗼𝘄𝗻',
      facebookLink: 'https://www.facebook.com/profile.php?id=61572376765539',
      nick: '𝗥𝗜𝗙𝗨'
    };

    const bold = 'https://i.imgur.com/2ELxc29.mp4'; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id

    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
    const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

    const response = `
𝐎𝐰𝐧𝐞𝐫 Information:🧾
𝐍𝐚𝐦𝐞: ${ownerInfo.name}
𝐆𝐞𝐧𝐝𝐞𝐫: ${ownerInfo.gender}
𝐀𝐠𝐞: ${ownerInfo.age}
𝐇𝐢𝐠𝐡𝐭: ${ownerInfo.height}
𝐅𝐚𝐜𝐛𝐨𝐨𝐤: ${ownerInfo.facebookLink}
𝐍𝐢𝐜𝐤: ${ownerInfo.nick}
`;


    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);

    if (event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('🚀', event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error('Error in ownerinfo command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
},
};
