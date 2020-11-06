const fs = require("fs");

switch (process.argv[2]) {
	case "Create":
		const template = fs.readFileSync("./ReactionPics/template.html", "utf8");
		const images = fs.readdirSync("./ReactionPics/images");
		for (const file of images) {
			const [name, type] = file.split(".");
			if (!fs.existsSync(`./${name}`)) {
				fs.mkdirSync(`./${name}`);
				fs.copyFileSync(`./ReactionPics/images/${file}`, `./${name}/${file}`);
				fs.writeFileSync(
					`./${name}/index.html`,
					template.replace(/{name}/g, name).replace(/{type}/g, type),
					"utf8"
				);
			}
		}
		break;

	case "Update":
		if (process.argv[3] === "README.md") fs.copyFileSync("./ReactionPics/README.md", "./README.md");
		else
			fs.copyFileSync(
				`./ReactionPics/images/${process.argv[3]}`,
				`./${process.argv[3].split(".")[0]}/${process.argv[3]}`
			);
		break;
}
