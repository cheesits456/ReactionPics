# ReactionPics

My personal folder of reaction images that I use in conversation on Discord and various other chat platforms

> [!IMPORTANT]
> All image and feature requests have been migrated from issues to [discussions](https://github.com/cheesits456/ReactionPics/discussions)

<details><summary><strong>Table of Contents:</strong></summary>

- [ReactionPics](#reactionpics)
  - [About](#about)
    - [Branch / Folder Structure:](#branch--folder-structure)
    - [Mitigation of Large File Sizes:](#mitigation-of-large-file-sizes)
  - [Usage](#usage)
    - [How To:](#how-to)
    - [Examples:](#examples)

</details>

## About

### Branch / Folder Structure:

Outlined below is an overview of this repository's two branches, and some key folders within them:

- **`master` branch -** main branch containing all the code required to make things work
  - **`images` folder -** contains all of the reaction images
  - **`scripts` folder -** contains scripts and other files relating to the automatic generation and deployment of configs and the site that hosts the image files
  - **`templates` folder -** contains the templates used by `build-pages.js` to generate the page structure for the `gh-pages` branch
- **`gh-pages` branch -** used for hosting the site that provides links for all the images as well as a table of all images on the homepage

### Mitigation of Large File Sizes:

Outlined below are some steps that have been taken to reduce the storage size of the image files:

- Still images are saved using the JPEG format to take advantage of JPEG's file compression
- GIFs have been limited to a maximum of 50 unique colors per frame
- Lossy compression is applied to every frame of each GIF
- Images are scaled to a height of 200 pixels to reduce file size and to reduce the vertical space taken up by the image when sent in a chat

## Usage

### How To:

All files in the `images` folder can be linked to using `https://pics.cheesits456.dev/name`, where `name` is replaced with the name of the image you wish to link to. In order to reduce the amount of unneeded text in your message, the `gh-pages` repository is generated in such a way that you don't need to include the file extension for it to properly link to and embed the image in a chat program. This has the added benefit that you don't have to know in advance whether the image is animated or not, so you won't have to remember whether to use `.jpeg` or `.gif` in your link.

### Examples:

A full list of examples can be found at <https://pics.cheesits456.dev/#examples>

|   Filename   |                  Link                  |                             Image                             |
| ------------ | -------------------------------------- | ------------------------------------------------------------- |
| dunno.gif    | <https://pics.cheesits456.dev/dunno>   | ![Dunno](https://pics.cheesits456.dev/dunno/dunno.gif)        |
| no.jpeg      | <https://pics.cheesits456.dev/no>      | ![No](https://pics.cheesits456.dev/no/no.jpeg)                |
| perhaps.jpeg | <https://pics.cheesits456.dev/perhaps> | ![Perhaps](https://pics.cheesits456.dev/perhaps/perhaps.jpeg) |
| thanks.gif   | <https://pics.cheesits456.dev/thanks>  | ![Thanks](https://pics.cheesits456.dev/thanks/thanks.gif )    |
| wat.jpeg     | <https://pics.cheesits456.dev/wat>     | ![Wat](https://pics.cheesits456.dev/wat/wat.jpeg)             |