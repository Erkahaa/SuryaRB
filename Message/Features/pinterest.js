// File://home/rose/BOT/SuryaRB/Message/Features/pinterest.js
import axios from "axios";

export default {
	command: ["ppkrest", "pter"],
	description: "Pinterest image search.",
	category: "Image",
	owner: false,
	admin: false,
	hidden: false,
	limit: false,
	group: false,
	private: false,

	execute: async function (m, { sock, api, text }) {
		if (!text) {
			return m.reply("Need text.");
		}
		const { data } = await axios.get(`https://aemt.me/pinterest?query=${text}`)

		if (!data) {
			return m.reply(data.message);
		}

		const random = Math.floor(Math.random() * data.result.length);

		await sock.sendMessage(
			m.chat,
			{ image: { url: data.result[random] } },
			{ quoted: m }
		);
	},
	failed: "Failed to execute the %cmd command\n%error",
	wait: null,
	done: null,
};