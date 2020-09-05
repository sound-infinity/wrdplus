import { TagData } from '.'

export class TagList {
    public collection: TagData[]
    constructor(collection: TagData[] = []){
        this.collection = collection
    }

    public isAnyTagOpen(): boolean {
        for (const tag of this.collection) {
            if (!tag.isClosed) return true
        }
    }

    public getAParent(): TagData {
        let Parent
        if (this.isAnyTagOpen()) {
            for (const tag of this.collection) {
                if(!tag.isClosed) Parent = tag
            }
        }
        return Parent
    }

    public add(tag: TagData){
        this.collection.push(tag)
    }
}