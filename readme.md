# wrdplus
* This script is made with the purpose of improving the experience on the [WRD's](wearedevs.net) website, overall, the forums.
* More info: (wiki)[/wiki]
## Current features - some not listed
* Custom CSS loader
* Custom background image
* Read and unread marks
* Title highlighting
* Post Tags

## Keybinds
* ``ALT+S`` = Toggle settings
* ``CTRL+CLICK`` = View ThreadData

## Post tags
* Tag format:
```
[tagName]
Contents
[/tagName]
```
### Spoiler
* Compacts its contents into a container that can be expanded and collapsed.
* Currently it accepts any html generated by the text editor.

### Code
* Kinda highlights code into its own container, and adds the ability to select all text within it in a single click.
* Converts any (as far as I know) html items into plain text

## Notes
* The custom css loader and background image requires an URL in order to work.
* Title highlighting only highlights the prefixes in a title, for example: ``[REL][FAKE] Something``, "REL" would be colored and "FAKE would be ignored".
* When queries fail, threads would be marked as unknown instead of unread/read.
  * The search function within this script depends on the search engine within wearedevs and sometimes it gives no result. I tried to query the thread link instead, but that gives a fake view, and nobody wants that, so yeah this problem probably won't be fixed. Unless, it's fixed within the website.
