import { ThreadData, ThreadQuery, User, SearchResults } from "./data-types"

// https://wearedevs.net/forum/all?order=latestthread&search=
const QueryEndpoint = `http://localhost:8080/build/test.html`
//const QueryEndpoint = 'https://wearedevs.net/forum/all?order=latestthread&search=$name'

const Regexes = {
    ExtractTableHeadAndBody: /<thead>([\s\S]*?)<\/thead>[\s\S]*?<tbody>([\s\S]*?)<\/tbody>/,
    TableContents: /<table>([\s\S]*?)<\/table>/,
    RemoveTags: /<script.*?<\/script>|<style.*?<\/style>/g,
    RemoveNewLines: /[\r\n]+\s+/g,
    TableRow: /<tr>(.*?)<\/tr>/g
}

function GetThreadsFromBodyHTML(html) {
    const [, contents] = html.replace(Regexes.RemoveTags, "").match(Regexes.TableContents)
    const [, thead, tbody] = contents.replace(Regexes.RemoveNewLines, '').match(Regexes.ExtractTableHeadAndBody)
    const rows = tbody.matchAll(Regexes.TableRow)
    const table = { thead: thead, tbody: tbody, rows: [] }

    for (let [row] of rows) {
        try {
            const [, threadSection, threadId, threadName, threadAuthorId, threadAuthorName, threadReplies, threadViews] = row.match(/.*?<a.*?href=.\/forum\/([A-z]+).*?<a.*?href=.\/forum\/t\/([0-9]+).*?>([\s\S]+?)<\/a>.*?href=.\/profile\?uid=([0-9]+).*?>(.*?)<\/a>.*?<td.*?>[\s]?([0-9]+).*?>[\s]?([0-9]+).*?<?/) // .*?href=.\/profile\?uid=([0-9]+).*?>([A-z]+)<\/a>
            let LastReplierMatch = row.replace(/<a.*?href=.\/profile\?uid=([0-9]+).*?>(.*?)<\/a>?.*?/, '').match(/.*?<\/td>.*?href=.\/profile\?uid=([0-9]+).*?>(.*?)<\/a>?.*?/)

            if (LastReplierMatch) {
                LastReplierMatch = new User(LastReplierMatch[2], LastReplierMatch[1])
            }

            table.rows.push(new ThreadData(threadName, threadId, threadReplies, threadViews, new User(threadAuthorName, threadAuthorId), threadSection, LastReplierMatch))
        } catch (x) { }
    }

    return table.rows
}

/**
 * 
 * @param {string} threadName 
 * @returns {Promise<SearchResults>}
 */
export default function SearchThreadAsync(threadName) {
    const QueryRequest = QueryEndpoint.replace("$name", threadName)

    return new Promise(resolve => {
        fetch(QueryRequest)
            .then(res => res.text())
            .then(body => {
                resolve(new SearchResults(GetThreadsFromBodyHTML(body)))
            })
    })
};