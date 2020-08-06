export default class DataManager {
    private containerName: string
    private doAutoParsing: boolean

    constructor(containerName: string, doAutoParsing: boolean = true) {
        this.containerName = containerName
        this.doAutoParsing = doAutoParsing
    }

    get Name(): string {
        return this.containerName
    }

    get raw(): string {
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
        } else if (typeof newData === 'string') {
            localStorage.setItem(this.containerName, newData)
        }
    }

    get Size(): string {
        return new Blob([this.raw]).size / 1000 + 'kb'
    }

    getKey(name: string | number) {
        return this.data[name]
    }

    setKey(name: string | number, value: any) {
        this.data = this.data
        const temp_data = this.data
        temp_data[name] = value
        this.data = temp_data
    }
}