# ReactionPics

My personal folder of reaction images that I use in conversation on Discord and various other chat platforms

> [!IMPORTANT]  
> All image and feature requests have been migrated from issues to [discussions](https://github.com/cheesits456/ReactionPics/discussions)

<details><summary><strong><ins>Table of Contents:</ins></strong></summary>

<!-- toc -->

- [ReactionPics](#reactionpics)
  - [About](#about)
    - [Branch/Folder Structure](#branchfolder-structure)
    - [Mitigation of Large File Sizes](#mitigation-of-large-file-sizes)
  - [Usage](#usage)
    - [How-to](#how-to)
    - [Examples](#examples)

<!-- tocstop -->

</details>

## About

### Branch/Folder Structure

Outlined below is an overview of this repository's two branches, and some key folders within them:

- **`master` branch:**
  - **`extras` folder:**
    - **`ChatAliases.config.json` file:** a configuration file for use with a BetterDiscord plugin called [ChatAliases](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/ChatAliases). To use it, put the `.plugin.js` file from the prior link into your BetterDiscord plugin folder, then reload the ChatAliases plugin. **See warning below regarding use of this plugin!**
  - **`images` folder:** contains all of the reaction images
  - **`scripts` folder:** contains scripts and other files relating to the automatic generation and deployment of configs and the site that hosts the image files
    - **`build-extras.js` file:** a script for automatically generating the above described `ChatAliases.config.json` file
    - **`build-pages.js` file:** a script for automatically generating and deploying the site hosted through the `gh-pages` branch
    - **`template.html` file:** a template for the `index.html` files in the generated site, used by the above described `build-pages.js` script to ease in the generation of the `gh-pages` branch
- **`gh-pages` branch:** used for hosting the site that provides links for all the images

> [!WARNING]  
> I have not used or tested the ChatAliases plugin in multiple years now, so it isn't guaranteed to still be working. If you try it out and find that it _does_ still work, please [create a new discussion](https://github.com/cheesits456/ReactionPics/discussions/new?category=general) to let me know so that I can update this note

### Mitigation of Large File Sizes

Outlined below are some steps that have been taken to reduce the storage size of the image files:

- Still images are saved using the JPEG format to take advantage of JPEG's file compression
- GIFs have been limited to a maximum of 50 unique colors per frame
- Lossy compression is applied to every frame of each GIF
- Images are scaled to a height of 200 pixels to reduce file size and to reduce the vertical space taken up by the image when sent in a chat

## Usage

### How-to

All files in the `images` folder can be linked to using `https://pics.cheesits456.dev/name`, where `name` is replaced with the name of the image you wish to link to. In order to reduce the amount of unneeded text in your message, the `gh-pages` repository is generated in such a way that you don't need to include the file extension for it to properly link to and embed the image in a chat program. This has the added benefit that you don't have to know in advance whether the image is animated or not, so you won't have to remember whether to use `.jpeg` or `.gif` in your link.

### Examples

| Link:                                | Result:                                                |
| ------------------------------------ | ------------------------------------------------------ |
| <https://pics.cheesits456.dev/dab>   | ![Dab](https://pics.cheesits456.dev/dab/dab.jpeg)      |
| <https://pics.cheesits456.dev/dunno> | ![Dunno](https://pics.cheesits456.dev/dunno/dunno.gif) |
| <https://pics.cheesits456.dev/no>    | ![No](https://pics.cheesits456.dev/no/no.jpeg)         |
