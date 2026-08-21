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

String.prototype.capitalize = function() {
	return String(this).charAt(0).toUpperCase() + String(this).slice(1);
}

const fs = require("fs");

switch (process.argv[2]) { // First word of commit message

	case "Create":
		// Load template to variable as a string
		const template = fs.readFileSync("./ReactionPics/templates/image-page.html", "utf8");

		if (fs.existsSync(`./ReactionPics/images/${process.argv[3]}`)) {
			const file = process.argv[3]; // filename
			const [name, format] = file.split(".");

			console.log(`Creating directory for ${file}`);
			try { fs.mkdirSync(`./${name}`) } catch (err) {};

			console.log(`Copying ${file} to new directory`);
			fs.copyFileSync(`./ReactionPics/images/${file}`, `./${name}/${file}`);

			console.log(`Creating index.html file for ${file}`);
			fs.writeFileSync(`./${name}/index.html`, template.replace(/{name}/g, name).replace(/{format}/g, format), "utf8");

		} else console.log("Nothing to do");

		break;

	case "Delete":
		const file = process.argv[3]; // filename
		const [name, format] = file.split(".");
		fs.unlinkSync(`./${name}`);
		break;

	case "Update":
		// If changed file is existing image, replace it with the new one
		if (fs.existsSync(`./ReactionPics/images/${process.argv[3]}`)) {
			console.log(`Replacing ${process.argv[3]} in gh-pages branch`);
			fs.copyFileSync(`./ReactionPics/images/${process.argv[3]}`, `./${process.argv[3].split(".")[0]}/${process.argv[3]}`);

		} else console.log("Nothing to do");

		break;

	default:
		console.log("Nothing to do");
		break;

};

// Build new README.md file for pics.cheesits456.dev homepage if needed
if (["Create", "Delete", "Update"].includes(process.argv[2])) {
	console.log("Building site landing page")
	// Load template to variable as a string
	const dir = fs.readdirSync("./ReactionPics/images");
	let readme = fs.readFileSync("./ReactionPics/templates/README.md", "utf8");
	readme += `\n### Examples:\n<sup>(<strong>${dir.length}</strong> images)</sup>\n\n| Filename | Link | Image |\n| -------- | ---- | ----- |\n`;

	// Loop through all image filenames and append to template, formatted as a markdown table
	for (const filename of dir) {
		const [name, format] = filename.split(".");
		const link = `https://pics.cheesits456.dev/${name}`
		readme += `| ${filename} | <${link}> | ![${name.capitalize()}](${link}/${filename}) |\n`;
	}

	fs.writeFileSync("./README.md", readme, "utf8");

}

console.log("Done!");