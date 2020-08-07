import { Regexes } from "../settings"


export default class TagData {
    public Name: string
    public Contents: HTMLElement[]
    public Parent: TagData
    public isClosed: boolean
    public Container: HTMLElement
    public Elements: { Opening: HTMLElement, Closing: HTMLElement }
    constructor(name:string = '', parent:TagData, contents:HTMLElement[] = [], isClosed:boolean = false) {
        this.Name = name.replace(Regexes.RemoveBrackets, '').toUpperCase()
        this.Contents = contents
        this.Parent = parent
        this.isClosed = isClosed
        this.Container = null

        this.Elements = {
            Opening: null,
            Closing: null
        }
    }
}