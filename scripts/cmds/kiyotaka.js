const axios = require('axios');module.exports = {  config: {    name: 'kiyokata',    version: '1.0',    author: 'Original Idea from: Akhiro',    role: 0,    category: 'Ai-Chat',    shortDescription: { en: `Kiyotaka is an Handsome AI\n| Language Model inspired by a character\n| from 'Classroom Of Elite', Kiyotaka exels\n| as an fake person that uses his friends\n| as a tool for his successfullness` },    longDescription: { en: `Kiyotaka is an Handsome AI\n| Language Model inspired by a character\n| from 'Classroom Of Elite', Kiyotaka exels\n| as an fake person that uses his friends\n| as a tool for his successfullness` },    guide: { en: '{pn}kiyokata [query]' },  },  onStart: async function ({ api, event }) {    try {      const query = args.join(" ");      if (query) {        const processingMessage = await api.sendMessage(`Asking 🤵  | Kiyotaka AI. Please wait a moment...`, event.threadID);        const response = await axios.get(`https://lianeapi.onrender.com/@public/api/kiyokata?query=${encodeURIComponent(query)}`);                if (response.data && response.data.message) {          await api.sendMessage({ body: response.data.message.trim() }, event.threadID, event.messageID);          console.log(`Sent 🤵  | Kiyotaka AI's response to the user`);        } else {          throw new Error(`Invalid or missing response from 🤵  | Kiyotaka AI API`);        }        await api.unsendMessage(processingMessage.messageID);      }    } catch (error) {      console.error(`❌ | Failed to get 🤵  | Kiyotaka AI's response: ${error.message}`);      api.sendMessage(`❌ | An error occured. You can try typing your query again or resending it. There might be an issue with the server that's causing the problem, and it might resolve on retrying.`, event.threadID);    }  },};
