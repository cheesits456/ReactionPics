const fs = require("fs");

let config = {
	amounts: {
		minAliasLength: 1
	},
	configs: {
		autoc: true,
		case: false,
		exact: true,
		file: false,
		regex: false
	},
	settings: {
		addAutoComplete: true,
		addContextMenu: true,
		replaceBeforeSend: true,
		triggerEdit: true,
		triggerNormal: true,
		triggerUpload: true
	},
	words: {}
};

console.log("Building JSON plugin configuration");
for (const [name, ext] of fs.readdirSync("./images").map(f => f.split("."))) {
	config.words[`>${name}`] = {
		autoc: true,
		case: false,
		exact: true,
		file: false,
		filedata: null,
		regex: false,
		replace: `https://pics.cheesits456.dev/${name}`
	};
}

console.log("Saving plugin config");
fs.writeFileSync("./extras/ChatAliases.config.json", JSON.stringify(config, null, "\t"), "utf8");

console.log("Done!");
