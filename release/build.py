from webbrowser import open as open_url
from os import system, path

import os
try:
    from urllib import pathname2url as pathtourl
except:
    from urllib.request import pathname2url as pathtourl


def log_info(text):
    print('wrdplus:', text)

if path.exists('wrdplus.meta.js'):
    log_info('Starting build...')
    system("yarn build")

    if (path.exists('wrdplus.user.js')):
        with open('wrdplus.meta.js', 'r', encoding='utf8') as metafile: meta = metafile.read()
        with open('wrdplus.user.js', 'r', encoding='utf8') as scriptfile: script=scriptfile.read()
        with open('wrdplus.user.js', 'w', encoding='utf8') as scriptfile:
            scriptfile.write(meta + '\n' + script)
        
        if input("Do you wanna install it? ") in 'Yy':
            open_url('file:{}'.format(pathtourl(path.abspath('redirect.html'))))
else:
    log_info("Unable to find WRD+ files.")