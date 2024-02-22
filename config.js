// File://home/rose/BOT/SuryaRB/config.js
export const Config = {
	phone_number: "62895327491487",
	owners: ["6289688403000"],
	use_pairing_code: true,
	pairing_wait: 1000 * 6,
	prefix: ["!", "."],
	itsrose_apikey: process.env.ITSROSE_APIKEY,

	database: {
		path: "./database.json",
		save_interval: 10_000,
		debug: false,
	},
};
