import { searchThreadAsync } from './search-thread-async'
import { SearchResults, ThreadData } from '../classes'

export async function searchThreadsAsync(threadNames: string[]): Promise<SearchResults> {
    const globalResults = new SearchResults()
    const searchResults = new SearchResults()
    for (const threadName of threadNames) {
        const threadInGlobal: ThreadData = globalResults.getThreadByName(threadName)
        if (threadInGlobal != null) {
            if (searchResults.getThreadById(threadInGlobal.Id) == null) {
                searchResults.Add(threadInGlobal)
            }
        } else {
            const results: SearchResults =  await searchThreadAsync(threadName)
            results?.collection.forEach(threadData => {
                globalResults.Add(threadData)
                if (threadData.Name === threadName) {
                    searchResults.Add(threadData)
                }
            })
        }
    }
    return searchResults
}