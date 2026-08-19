/*

+-------------------+---------------------------------------------------------------+
|   Variable name   |                          Description                          |
+-------------------+---------------------------------------------------------------+
|  process.argv[2]  |  First word of commit message; typically 'Create' when a new  |
|                   |  image is added, or 'Update' when an image is modified        |
+-------------------+---------------------------------------------------------------+
|                   |  Second word of commit message; when first word is 'Create"   |
|  process.argv[3]  |  or 'Update', this will be the name of the created or         |
|                   |  modified file                                                |
+-------------------+---------------------------------------------------------------+

*/

const fs = require("fs");

(async () => {

	switch (process.argv[2]) { // First word of commit message

		case "Create":
			// Load template to variable as a string
			const template = await fs.readFile("./ReactionPics/templates/image-page.html", "utf8");

			if (fs.existsSync(`./ReactionPics/images/${process.argv[3]}`)) {
				const file = process.argv[3]; // filename
				const [name, format] = file.split(".");

				console.log(`Creating directory for ${file}`);
				await fs.mkdir(`./${name}`);

				console.log(`Copying ${file} to new directory`);
				await fs.copyFile(`./ReactionPics/images/${file}`, `./${name}/${file}`);

				console.log(`Creating index.html file for ${file}`);
				await fs.writeFile(`./${name}/index.html`, template.replace(/{name}/g, name).replace(/{format}/g, format), "utf8");

			} else console.log("Nothing to do");

			break;

		case "Update":
			// If changed file is the README, copy it to pages branch
			if (process.argv[3] === "README.md") {
				console.log("Copying README.md to gh-pages branch");
				await fs.copyFile("./ReactionPics/README.md", "./README.md");

			// If changed file is existing image, replace it with the new one
			} else if (fs.existsSync(`./ReactionPics/images/${process.argv[3]}`)) {
				console.log(`Replacing ${process.argv[3]} in gh-pages branch`);
				await fs.copyFile(`./ReactionPics/images/${process.argv[3]}`, `./${process.argv[3].split(".")[0]}/${process.argv[3]}`);

			} else console.log("Nothing to do");

			break;

		default:
			console.log("Nothing to do");
			break;

	};

	// Build new README.md file for pics.cheesits456.dev homepage if needed
	if (["Create", "Update"].includes(process.argv[2])) {
		for (const filename of await fs.readdir("./ReactionPics/images")) {
			console.log(filename);
		}
	}

	console.log("Done!");

})();