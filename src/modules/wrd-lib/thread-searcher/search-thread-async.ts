import { QueryEndpoint, GetThreadsFromBodyHTML } from './utils'
import { SearchResults } from '../classes'

export function searchThreadAsync(threadName: string): Promise<SearchResults> {
    return new Promise(resolve => {
        fetch(QueryEndpoint.replace("$name", threadName))
            .then(res => res.text())
            .then(body => {
                resolve(GetThreadsFromBodyHTML(body))
            })
    })
}