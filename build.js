const fs = require("fs");

switch (process.argv[2]) {
	case "Create":
		const template = fs.readFileSync("./ReactionPics/template.html", "utf8");
		if (fs.existsSync(`./ReactionPics/images/${process.argv[3]}`)) {
			const file = process.argv[3];
			const [name, type] = file.split(".");
			console.log(`Creating directory for ${file}`);
			fs.mkdirSync(`./${name}`);
			console.log(`Copying ${file} to new directory`);
			fs.copyFileSync(`./ReactionPics/images/${file}`, `./${name}/${file}`);
			console.log(`Creating index.html file for ${file}`);
			fs.writeFileSync(
				`./${name}/index.html`,
				template.replace(/{name}/g, name).replace(/{type}/g, type),
				"utf8"
			);
		} else console.log("Nothing to do");
		break;

	case "Update":
		if (process.argv[3] === "README.md") {
			console.log("Copying README.md to gh-pages branch");
			fs.copyFileSync("./ReactionPics/README.md", "./README.md");
		} else if (fs.existsSync(`./ReactionPics/images/${process.argv[3]}`)) {
			console.log(`Replacing ${process.argv[3]} in gh-pages branch`);
			fs.copyFileSync(
				`./ReactionPics/images/${process.argv[3]}`,
				`./${process.argv[3].split(".")[0]}/${process.argv[3]}`
			);
		} else console.log("Nothing to do");
		break;

	default:
		console.log("Nothing to do");
		break;
}

console.log("Done!");
