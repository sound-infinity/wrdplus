import { QueryEndpoint, getThreadsFromBodyHTML } from './utils'
import { SearchResults } from '../classes'

export async function searchThreadAsync(threadName: string): Promise<SearchResults> {
    const body: string = await fetch(QueryEndpoint.replace('$name', threadName)).then(res => res.text())
    return getThreadsFromBodyHTML(body)
}