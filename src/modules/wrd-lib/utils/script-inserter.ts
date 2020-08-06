//https://cdn.jsdelivr.net/npm/showdown@1.9.0/dist/showdown.min.js

export function insertExternalScript(url: string): HTMLScriptElement {
    const _script = document.createElement('script')
    _script.src = url
    document.head.appendChild(_script)
    return _script
}