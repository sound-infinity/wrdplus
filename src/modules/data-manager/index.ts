export const DataManagers: DataManager[] = []

export default class DataManager {
    private containerName: string
    private doAutoParsing: boolean

    constructor(containerName: string, doAutoParsing = true) {
        this.containerName = containerName
        this.doAutoParsing = doAutoParsing
        DataManagers.push(this)
    }

    get Name(): string {
        return this.containerName
    }

    get raw(): string {
        return localStorage.getItem(this.containerName) || ""
    }

    get data() {
        const itemVal = this.raw

        if (this.doAutoParsing) {
            return JSON.parse(itemVal || "{}") || {}
        } else {
            return itemVal
        }
    }

    set data(newData) {
        if (this.doAutoParsing) {
            localStorage.setItem(
                this.containerName,
                JSON.stringify(newData || {})
            )
        } else if (typeof newData === "string") {
            localStorage.setItem(this.containerName, newData)
        }
    }

    /**
     * Returns size of data/string in kilobytes
     */
    get Size(): number {
        return new Blob([this.raw]).size / 1000
    }

    getKey(name: string | number) {
        return this.data[name]
    }

    setKey(name: string | number, value: string | object) {
        this.data = this.data
        const temp_data = this.data
        temp_data[name] = value
        this.data = temp_data
    }

    delete() {
        localStorage.removeItem(this.containerName)
    }
}
