import { Regexes } from './settings'

export default class TagData {
    constructor(name = '', contents = [], parent = false, isClosed = false) {
        this.Name = name.replace(Regexes.RemoveBrackets, '').toUpperCase()
        this.Contents = contents
        this.Parent = parent
        this.isClosed = isClosed
        this.Container = false

        this.Elements = {
            Opening: false,
            Closing: false
        }
    }
}