import { ThreadData, User, SearchResults } from '../classes'

export const cached = {}
export const QueryEndpoint = 'https://wearedevs.net/forum/all?order=latestthread&search=$name'

export const Regexes = {
    ExtractTableHeadAndBody: /<thead>([\s\S]*?)<\/thead>[\s\S]*?<tbody>([\s\S]*?)<\/tbody>/,
    TableContents: /<table>([\s\S]*?)<\/table>/,
    RemoveTags: /<script.*?<\/script>|<style.*?<\/style>/g,
    RemoveNewLines: /[\r\n]+\s+/g,
    TableRow: /<tr>(.*?)<\/tr>/g
}

/**
 * 
 * @param {Element} anchorTag
 * @returns {User} 
 */
export function MakeUserFromAnchorTag(anchorTag) {
    if (anchorTag && anchorTag.href) {
        return new User(anchorTag.textContent.trim(), anchorTag.href.match(/\?uid=([0-9]+)/)[1])
    }
}

/**
 * 
 * @param {Element} anchorTag
 * @returns {Object} 
 */
export function GetThreadInfoFromAnchorTag(anchorTag) {
    if (anchorTag && anchorTag.href) {
        return {
            Name: anchorTag.textContent.trim(),
            Id: anchorTag.href.match(/\/([0-9]+)/)[1]
        }
    }
}

/**
* 
* @param {string} html
* @returns {SearchResults} 
*/
export function GetThreadsFromBodyHTML(html) {
    const t0 = performance.now()
    const [, contents] = html.replace(Regexes.RemoveTags, "").match(Regexes.TableContents)
    const [, , tbody] = contents.replace(Regexes.RemoveNewLines, '').match(Regexes.ExtractTableHeadAndBody)
    const searchResults = new SearchResults()
    const rows = tbody.replace(/[\n]/g, '').matchAll(Regexes.TableRow)

    for (let [row] of rows) {
        try {
            const [, threadSection, threadId, threadName, threadAuthorId, threadAuthorName, threadReplies, threadViews] = row.match(/.*?<a.*?href=.\/forum\/(.*?)".*?<a.*?href=.\/forum\/t\/([0-9]+).*?>([\s\S]+?)<\/a>.*?href=.\/profile\?uid=([0-9]+).*?>(.*?)<\/a>.*?<td.*?>[\s]?([0-9]+).*?>[\s]?([0-9]+).*?<?/) // .*?href=.\/profile\?uid=([0-9]+).*?>([A-z]+)<\/a>
            let LastReplierMatch = row.replace(/<a.*?href=.\/profile\?uid=([0-9]+).*?>(.*?)<\/a>?.*?/, '').match(/.*?<\/td>.*?href=.\/profile\?uid=([0-9]+).*?>(.*?)<\/a>?.*?/)
            if (LastReplierMatch) {
                LastReplierMatch = new User(LastReplierMatch[2], LastReplierMatch[1])
            }
            searchResults.Add(new ThreadData(threadName, threadId, threadReplies, threadViews, new User(threadAuthorName, threadAuthorId), LastReplierMatch, threadSection))
        } catch (x) { console.error(x) }
    }
    return searchResults
}