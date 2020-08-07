export default class LineData {
    public Target: HTMLElement
    public Value: string

    constructor(target: HTMLElement, value: string){
        this.Target = target
        this.Value = value
    }
}