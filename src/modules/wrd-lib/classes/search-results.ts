import { ThreadData } from '../classes';

export default class SearchResults {
    constructor(){}
    public collection: ThreadData[] = []
    getThreadById(threadId: number): ThreadData {
        for (const threadData of this.collection) {
            if (threadData.Id === threadId) {
                return threadData
            }
        }
    }
    getThreadByName(threadName: string): ThreadData {
        return this.getThreadsByName(threadName)[0]
    }
    getThreadsByName(threadName: string): ThreadData[] {
        const results: ThreadData[] = []
        this.collection.forEach(threadData => {
            if (threadData.Name === threadName) {
                results.push(threadData)
            }
        })
        return results
    }
    Add(Item: ThreadData) {
        this.collection.push(Item)
    }

    Migrate(other: SearchResults){
        if (other != null){
            this.collection = other.collection
        }
    }
}