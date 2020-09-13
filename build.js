const fs = require("fs");

const template = fs.readFileSync("./ReactionPics/index.html.template", "utf8");
const images = fs.readdirSync("./ReactionPics/images");

fs.copyFileSync("./ReactionPics/README.md", "./README.md");
for (const file of images) {
	const [name, type] = file.split(".");
	if (!fs.existsSync(`./${name}`)) {
		fs.mkdirSync(`./${name}`);
		fs.copyFileSync(`./ReactionPics/images/${file}`, `./${name}/${file}`);
		fs.writeFileSync(`./${name}/index.html`, template.replace(/{name}/g, name).replace(/{type}/g, type), "utf8");
	}
}
