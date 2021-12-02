export const storages: string[] = []

function register(name: string) {
    for (const storageName of storages) {
        if (storageName === name) {
            return
        }
    }
    storages.push(name)
}

function create(name: string) {
    localStorage.setItem(name, "{}")
    register(name)
    return {}
}

function exists(name: string) {
    return localStorage.getItem(name) ? true : false
}

function read(name: string) {
    if (exists(name)) {
        register(name)
        try {
            return JSON.parse(localStorage.getItem(name) || "{}")
        } catch {
            return "{}"
        }
    }
}

function readAsText(name: string) {
    if (exists(name)) {
        register(name)
        return localStorage.getItem(name)
    }
}

function write(name: string, value: string | object) {
    if (exists(name)) {
        register(name)
        if (typeof value !== "string") value = JSON.stringify(value)
        localStorage.setItem(name, value)
    }
}

export function removeItem(name: string) {
    if (exists(name)) {
        localStorage.removeItem(name)
    }
}

export function setItem(name: string, value: object) {
    write(name, value)
}

export function size(name: string) {
    if (exists(name)) {
        return new Blob([readAsText(name) || ""]).size / 1000
    }
}

export async function loadItem(name: string) {
    const storage = exists(name) ? read(name) : create(name)
    if (storage == null) return
    write(name, storage)
    /*
    Object.defineProperty(storage, "write", {
        enumerable: false,

        value: function () {
            write(name, this)
        },
    })*/
    return storage
}

export default { removeItem, loadItem }
