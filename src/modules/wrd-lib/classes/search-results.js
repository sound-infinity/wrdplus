import { ThreadData } from '.'

export default class SearchResults {
    constructor() {
        /**
         * @property {(collection: ThreadData[])} 
         */
        this.collection = []
    }
    /**
     * Retrieves a thread by its id, only one is returned.
     * @param {number} threadId 
     * @returns {ThreadData}
     */
    GetThreadById(threadId) {
        for (const threadData of this.collection) {
            if (threadData.Id === threadId) {
                return threadData
            }
        }
    }
    /**
     * Looks for threads with the given name.
     * @param {string} threadName
     * @returns {ThreadData[]} 
     */
    GetThreadByName(threadName) {
        const results = []
        this.collection.forEach(threadData => {
            if (threadData.Name === threadName) {
                results.push(threadData)
            }
        })
        return results
    }
    /**
     * Adds an item to the list.
     * @param {ThreadData} Item 
     */
    Add(Item) {
        this.collection.push(Item)
    }
}
