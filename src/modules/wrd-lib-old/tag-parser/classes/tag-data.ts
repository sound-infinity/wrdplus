import { Regexes } from "../settings"
import { Content } from "./content"


export class TagData {
    public Name: string
    public Contents: Content[]
    public Parent: TagData
    public isClosed: boolean
    public Container: HTMLElement
    public Elements: { Opening: HTMLElement, Closing: HTMLElement }
    constructor(name:string = '', parent:TagData, contents: Content[] = [], isClosed:boolean = false) {
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