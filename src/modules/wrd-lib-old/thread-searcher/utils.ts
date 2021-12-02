import { ThreadData, User, SearchResults } from '../classes'

export const QueryEndpoint = 'https://wearedevs.net/forum/all?order=latestthread&search=$name'

export const Regexes = {
    ExtractTableHeadAndBody: /<thead>([\s\S]*?)<\/thead>[\s\S]*?<tbody>([\s\S]*?)<\/tbody>/,
    TableContents: /<table>([\s\S]*?)<\/table>/,
    RemoveTags: /<script.*?<\/script>|<style.*?<\/style>/g,
    RemoveNewLines: /[\r\n]+\s+/g,
    TableRow: /<tr>(.*?)<\/tr>/g
}

export function MakeUserFromAnchorTag(anchorTag: HTMLAnchorElement): User {
    if (anchorTag && anchorTag.href) {
        return new User(anchorTag.textContent.trim(), anchorTag.href.match(/\?uid=([0-9]+)/)[1])
    }
}

export function GetThreadInfoFromAnchorTag(anchorTag: HTMLAnchorElement): ThreadData {
    if (anchorTag && anchorTag.href) {
        return new ThreadData(anchorTag.textContent.trim(), anchorTag.href.match(/\/([0-9]+)/)[1])
    }
}

export function getThreadsFromBodyHTML(html: string): SearchResults {
    const results = new SearchResults()
    let contents: string;
    let table_body: string;

    if (html.match(Regexes.RemoveTags) && html.match(Regexes.TableContents)) {
        contents = html.replace(Regexes.RemoveTags, '').match(Regexes.TableContents)[1]
        table_body = contents.replace(Regexes.RemoveNewLines, '').match(Regexes.ExtractTableHeadAndBody)[2]

        if (table_body != null) {
            const table_rows = table_body.replace(/[\n]/g, '').matchAll(Regexes.TableRow)
            
            for (const [row] of table_rows) {
                const row_matches = row.match(/.*?<a.*?href=.\/forum\/(.*?)".*?<a.*?href=.\/forum\/t\/([0-9]+).*?>([\s\S]+?)<\/a>.*?href=.\/profile\?uid=([0-9]+).*?>(.*?)<\/a>.*?<td.*?>[\s]?([0-9]+).*?>[\s]?([0-9]+).*?<?/)
                ///////////////////
                row_matches.shift()
                ///////////////////
                const [threadSection, threadId, threadName] = row_matches.splice(0, 3)
                const [threadAuthorId, threadAuthorName] = row_matches.splice(0, 2)
                const [threadReplies, threadViews] = row_matches.splice(0, 2)

                let LastReplierMatch = row.replace(/<a.*?href=.\/profile\?uid=([0-9]+).*?>(.*?)<\/a>?.*?/, '').match(/.*?<\/td>.*?href=.\/profile\?uid=([0-9]+).*?>(.*?)<\/a>?.*?/)
                
                let LastReplier: User = LastReplierMatch != null && new User(LastReplierMatch[2], LastReplierMatch[1]);
                
                results.Add(new ThreadData(threadName, threadId, threadReplies, threadViews, new User(threadAuthorName, threadAuthorId), LastReplier, threadSection))
            }
        } 
    }
    return results
}

/*
export function GetThreadsFromBodyHTML(html: string): SearchResults {
    const [, contents] = html.replace(Regexes.RemoveTags, "").match(Regexes.TableContents)
    const [, , tbody]: any = contents.replace(Regexes.RemoveNewLines, '').match(Regexes.ExtractTableHeadAndBody)
    const searchResults = new SearchResults()
    const rows = tbody.replace(/[\n]/g, '').matchAll(Regexes.TableRow)

    for (let [row] of rows) {
        try {
            const [, threadSection, threadId, threadName, threadAuthorId, threadAuthorName, threadReplies, threadViews] = row.match(/.*?<a.*?href=.\/forum\/(.*?)".*?<a.*?href=.\/forum\/t\/([0-9]+).*?>([\s\S]+?)<\/a>.*?href=.\/profile\?uid=([0-9]+).*?>(.*?)<\/a>.*?<td.*?>[\s]?([0-9]+).*?>[\s]?([0-9]+).*?<?/) // .*?href=.\/profile\?uid=([0-9]+).*?>([A-z]+)<\/a>
            let LastReplierMatch = row.replace(/<a.*?href=.\/profile\?uid=([0-9]+).*?>(.*?)<\/a>?.*?/, '').match(/.*?<\/td>.*?href=.\/profile\?uid=([0-9]+).*?>(.*?)<\/a>?.*?/)
            if (LastReplierMatch) {
                LastReplierMatch = new User(LastReplierMatch[2], LastReplierMatch[1])
            }
            searchResults.Add()
        } catch (x) { console.error(x) }
    }
    return searchResults
}
*/