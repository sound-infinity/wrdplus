export default class DataManager {

    constructor(containerName, doAutoParsing = true) {
        this.containerName = containerName
        this.doAutoParsing = doAutoParsing
    }

    get Name() {
        return this.containerName
    }

    get raw() {
        return localStorage.getItem(this.containerName)
    }

    get data() {
        const itemVal = this.raw

        if (this.doAutoParsing) {
            return JSON.parse(itemVal || '{}') || {}
        } else {
            return itemVal
        }
    }

    set data(newData) {
        if (this.doAutoParsing) {
            localStorage.setItem(this.containerName, JSON.stringify(newData || {}))
        } else {
            localStorage.setItem(this.containerName, newData)
        }
    }

    get Size() {
        return new Blob([this.raw]).size / 1000 + 'kb'
    }

    getKey(name) {
        return this.data[name]
    }

    setKey(name, value) {
        this.data = this.data
        const temp_data = this.data
        temp_data[name] = value
        this.data = temp_data
    }
}