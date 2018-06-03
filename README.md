# Rainbow Tree

## 🌈🌳

Colour-codes files and folder names in the tree-view so that each level uses a different rainbow colour.

The idea is that this makes it easier to tell which folder a file belongs to, but it also looks really nice.

![Screenshot of rainbow tree applied to tree-view](rainbow-tree-screenshot.png)

## Colours

Six pastel colours are used to represent the rainbow:

- @pastel-red: #ffb3ba
- @pastel-orange: #ffd2b3
- @pastel-yellow: #fff8b3
- @pastel-green: #baffb3
- @pastel-blue: #bae1ff
- @pastel-violet: #baa2e8

Files that are:

- mentioned in the `gitignore` file, i.e. git-ignored
- new to git
- modified according to git

still use the default colours for the default theme for Atom, i.e. brown, green and amber. The rainbow colours don't apply to them.

Files in the root of the project also don't receive a rainbow colour, so in the default colour scheme of Atom, they appear as white. Folders at root receive the pastel-red colour.

The colours are iterated over 12 times. For any files and folders more than 12 levels deep in the project, they will receive the 12th colour in the list of colours, i.e. 12 modulus number of colours, which for these six colours is pastel-violet.

## How to use

Install the package as usual. The colours should apply immediately. To disable, go to the Installed Packages menu in the Setting pane and disable the `rainbow-tree` package.

## Note

This package was developed for the One Dark theme of Atom. If you have a light theme it will probably look rubbish.

## Future Features

- Add ability to modify colours from options
- Add ability to change the way folder and file colours are different
