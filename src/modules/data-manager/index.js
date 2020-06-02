export default class DataManager {

    constructor(containerName, doAutoParsing = true) {
        this.containerName = containerName
        this.doAutoParsing = doAutoParsing
    }

    getData() {
        const itemVal = localStorage.getItem(this.containerName)

        if (this.doAutoParsing) {
            return JSON.parse(itemVal || '{}') || {}
        } else {
            return itemVal
        }
    }

    setData(newData) {
        if (this.doAutoParsing) {
            localStorage.setItem(this.containerName, JSON.stringify(newData || {}))
        } else {
            localStorage.setItem(this.containerName, newData)
        }
    }

    getKey(name) {
        return this.getData()[name]
    }

    setKey(name, value) {
        this.setData(this.getData())
        const temp_data = this.getData()
        temp_data[name] = value
        this.setData(temp_data)
    }
}