//TODO: Rewrite
import { SearchThreadAsync } from './search-thread-async'
import { SearchResults } from '../classes'
/**
 * 
 * @param {string[]} threadNames
 * @returns {Promise<SearchResults>}
 */
export function SearchThreadsAsync(threadNames = []) {
    const searchResults = new SearchResults()
    const threadsFound = {}//Keeps track of found threads
    let currentIndex = -1
    let previousResults
    //Looks for threads that may be within the same page
    //to save the amount of queries sent.
    return new Promise(resolve => {
        //Iterates thru the queries requested, using paramater threadNames[]
        function Next() {
            currentIndex++;
            const threadName = threadNames[currentIndex]
            /**
             * 
             * @param {SearchResults} threads 
             */
            function LookIn(threads) {
                threads.collection.forEach(threadData => {
                    threadNames.forEach(threadName2 => {
                        //Checks if thread has been found and that it wont be duplicated
                        if (threadData.Name === threadName2 && !(threadName2 in threadsFound)) {
                            threadsFound[threadName2] = true
                            searchResults.Add(threadData)
                        }
                    })
                })
                previousResults = threads
                if (currentIndex < threadNames.length - 1) {//Cheks wether 
                    Next()
                } else {
                    resolve(searchResults)
                }
            }
            //Checks if thread has been within previous queries
            if (threadsFound[threadName]) {
                LookIn(previousResults)
            } else {
                //Else send new query
                SearchThreadAsync(threadName).then(res => {
                    LookIn(res)
                })
            }
        }
        Next()
    })
}