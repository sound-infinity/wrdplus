from webbrowser import open as open_url
from os import system, path

import os
try:
    from urllib import pathname2url as pathtourl
except:
    from urllib.request import pathname2url as pathtourl


def log_info(text):
    print('wrdplus:', text)


# CWD: /wrdplus/
filepaths = {
    "redirect_page": "release/redirect.html",
    "built_script": "build/wrdplus.user.js",
    "dest_script": "release/wrdplus.user.js",
    "meta_data": "release/wrdplus.meta.js",
}


if path.exists(filepaths["meta_data"]):
    log_info('Launching build...')
    system("start /wait cmd /c yarn build")
    log_info('Appending metadata to source-code...')

    if (path.exists(filepaths.get("built_script"))):
        with (open(filepaths.get("meta_data"), encoding='utf8')) as mtfile: meta = mtfile.read()
        with (open(filepaths.get("built_script"), encoding='utf8')) as scriptfile: script = scriptfile.read()
        with (open(filepaths.get("dest_script"), "w+", encoding='utf8')) as scriptfile:
            scriptfile.write(meta+'\n'+script)
                
        if input("Do you wanna install it? ") in 'Yy':
            open_url('file:{}'.format(pathtourl(path.abspath(filepaths.get("redirect_page")))))
else:
    log_info("Unable to find WRD+ files.")