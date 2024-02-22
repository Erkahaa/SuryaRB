export default {
	command: ["facebook", "fb", "fbdl", "fbdown"],
	description: "Download Facebook video.",
	category: "Downloader",
	owner: false,
	admin: false,
	hidden: false,
	limit: 0,
	group: false,
	private: false,

	execute: async function (m, { sock, api, args }) {
		const url = args[0];
		if (!url) {
			return m.reply("Please provide a Facebook link");
		}

		const apiUrl = `https://aemt.me/download/fbdown?url=${url}`;
		fetch(apiUrl)
			.then(response => response.json())
			.then(data => {
				const { status, message, result } = data;
				if (!status) {
					return m.reply(message);
				}
				let videoUrl;
				if (result.url.isHdAvailable && result.url.urls.length > 0 && result.url.urls[0].hd) {
					videoUrl = result.url.urls[0].hd;
				} else if (result.url.urls.length > 0 && result.url.urls[0].sd) {
					videoUrl = result.url.urls[0].sd;
				} else {
					return m.reply("No video available");
				}
				sock.sendMessage(
					m.chat,
					{ video: { url: videoUrl }, caption: "Downloaded from Facebook" },
					{ quoted: m }
				);
			})
			.catch(error => {
				console.error('Error:', error);
				return m.reply("Failed to fetch Facebook video");
			});
	},
	failed: "Failed to execute the %cmd command\n%error",
	wait: null,
	done: null,
};