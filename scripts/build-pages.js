/*

+-------------------+------------------------------------------------------------------+
|   Variable name   |                           Description                            |
+-------------------+------------------------------------------------------------------+
|                   |  First word of commit message; typically 'Create' when a new     |
|  process.argv[2]  |  image is added, 'Delete' when an image is removed, or 'Update'  |
|                   |  when an image is modified                                       |
+-------------------+------------------------------------------------------------------+
|                   |  Second word of commit message; when first word is 'Create",     |
|  process.argv[3]  |  'Delete', or 'Update', this will be the name of the created or  |
|                   |  modified file                                                   |
+-------------------+------------------------------------------------------------------+
|                   |  In the case where the first word of the commit message is       |
|  process.argv[5]  |  'Replace', this will be the name of the new file, and           |
|                   |  process.argv[3] will be the name of the file being replaced     |
+-------------------+------------------------------------------------------------------+

*/

String.prototype.capitalize = function () {
	return String(this).charAt(0).toUpperCase() + String(this).slice(1);
};

const fs = require("fs");

const action = process.argv[2];
const possibleActions = ["Create", "Delete", "Replace", "Update"];
const file = process.argv[3];
const template = fs.readFileSync("./ReactionPics/templates/image-page.html", "utf8");

switch (action) { // First word of commit message

	case "Create":
		if (fs.existsSync(`./ReactionPics/images/${file}`)) {
			const [name, format] = file.split(".");

			console.log(`Creating directory for ${file}`);
			try { fs.mkdirSync(`./${name}`) } catch (err) { };

			console.log(`Copying ${file} to new directory`);
			fs.copyFileSync(`./ReactionPics/images/${file}`, `./${name}/${file}`);

			console.log(`Creating index.html file for ${file}`);
			fs.writeFileSync(`./${name}/index.html`, template.replace(/{name}/g, name).replace(/{format}/g, format), "utf8");

		} else console.log(`Nothing to do (${file} doesn't exist)`);

		break;

	case "Delete":
		const [name, format] = file.split(".");

		console.log(`Deleting index.html file for ${file} along with associated folder`);
		if (fs.existsSync(`./${name}`)) fs.rmSync(`./${name}`, { force: true, recursive: true });
		break;


	case "Replace":
		const oldFile = process.argv[3];
		const newFile = process.argv[5];
		const [oldName, oldFormat] = oldFile.split(".");
		const [newName, newFormat] = newFile.split(".");

		console.log(`Replacing ${oldFile} with ${newFile}`);
		if (fs.existsSync(`./ReactionPics/images/${newFile}`)) {

			console.log(`Deleting index.html file for ${oldFile} along with associated folder`);
			if (fs.existsSync(`./${oldName}`)) fs.rmSync(`./${oldName}`, { force: true, recursive: true });

			console.log(`Creating directory for ${newFile}`);
			try { fs.mkdirSync(`./${newName}`) } catch (err) { };

			console.log(`Copying ${newFile} to new directory`);
			fs.copyFileSync(`./ReactionPics/images/${newFile}`, `./${newName}/${newFile}`);
			
			console.log(`Creating index.html file for ${file}`);
			fs.writeFileSync(`./${newName}/index.html`, template.replace(/{name}/g, newName).replace(/{format}/g, newFormat), "utf8");

		} else console.log(`Nothing to do (${newFile} doesn't exist)`);

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
if (possibleActions.includes(action)) {
	console.log("Building site landing page");
	// Load template to variable as a string
	const dir = fs.readdirSync("./ReactionPics/images");
	let readme = fs.readFileSync("./ReactionPics/templates/README.md", "utf8");
	readme += [
		"",
		"## Examples:",
		`<sup>(<strong>${dir.length}</strong> images)</sup>`,
		"",
		"| Filename | Link | Image |",
		"| -------- | ---- | ----- |",
		""
	].join("\n");

	// Loop through all image filenames and append to template, formatted as a markdown table
	for (const filename of dir) {
		const [name, format] = filename.split(".");
		const link = `https://pics.cheesits456.dev/${name}`;
		readme += `| ${filename} | <${link}> | ![${name.capitalize()}](${link}/${filename}) |\n`;
	};

	fs.writeFileSync("./README.md", readme, "utf8");

};

console.log("Done!");
