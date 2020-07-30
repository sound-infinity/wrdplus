import { ThreadData } from '../classes';

export default class SearchResults {
    public collection: ThreadData[] = []
    constructor(){}
    /**
     * 
     * @param {threadId 
     */
    GetThreadById(threadId: number){
        for (const threadData of this.collection) {
            if (threadData.Id === threadId) {
                return threadData
            }
        }
    }
    GetThreadByName(threadName: string): ThreadData[] {
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
}