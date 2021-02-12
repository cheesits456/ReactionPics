# ReactionPics

My personal folder of "reaction" images that I use in conversation on Discord

## About

### File size

In order to reduce file sizes so that images load faster, a couple things have been done:

- Still images are saved as JPEG files to take advantage of JPEG's file compression
- GIFs have been limited to a maximum of 50 unique colors per frame
- Lossy compression is applied to each frame of the GIFs

Also, the files are all scaled to a height of 200 pixels, so that they don't take up too much space when used in chat

### Folder/Branch Structure

- The `images` folder on the `master` branch contains all the reaction images
- The `extras` folder on the `master` branch contains a configuration file for use with a BetterDiscord plugin called [ChatAliases](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/ChatAliases). To use it, just download it and put it in your BetterDiscord plugin folder, then reload the ChatAliases plugin by turning it off and then back on again.
- The `gh-pages` branch is used to create links to the images

## Usage

All files in the `images` folder can be linked to using `https://pics.c456.xyz/{name}`, where `{name}` is the name of the image (without the extension).

#### Examples:

| <https://pics.c456.xyz/dab>                | <https://pics.c456.xyz/dunno>                   | <https://pics.c456.xyz/no>              |
|:------------------------------------------ |:----------------------------------------------- |:--------------------------------------- |
| ![Dab](https://pics.c456.xyz/dab/dab.jpeg) | ![Dunno](https://pics.c456.xyz/dunno/dunno.gif) | ![No](https://pics.c456.xyz/no/no.jpeg) |

