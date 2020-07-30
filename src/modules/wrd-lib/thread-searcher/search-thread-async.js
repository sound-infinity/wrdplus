import { QueryEndpoint, GetThreadsFromBodyHTML } from './utils'
/**
 * 
 * @param {string} threadName 
 * @returns {Promise<SearchResults>}
 */
export function SearchThreadAsync(threadName) {
    return new Promise(resolve => {
        fetch(QueryEndpoint.replace("$name", threadName))
            .then(res => res.text())
            .then(body => {
                resolve(GetThreadsFromBodyHTML(body))
            })
    })
}