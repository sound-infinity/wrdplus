import { getLinkType, getThreadIdFromUrl, getUserInfoFromTag } from '../utils'
import { SearchResults, ThreadData, User } from '../classes'
import { LinkType } from '../enums'

const cached: any = {}

class TableData {
     headers: { [key: number]: string } = {}
     rows: {columns: {[header:string]: HTMLTableDataCellElement}, element: HTMLTableRowElement}[] = []

    constructor(table: HTMLTableElement) {
        const tableHeaders = table.tHead.firstElementChild.children
        const tableRows = table.tBodies[0].rows
        
        for (let i = 0; i < tableHeaders.length; ++i) {
            const header = tableHeaders[i]
            this.headers[i] = header.textContent.toLowerCase().replace(/\s/g, '')
        }

        for (let rowIndex = 0; rowIndex < tableRows.length; ++rowIndex) {
            const row = tableRows[rowIndex]
            const rowColumns: HTMLTableDataCellElement[] = row.children as unknown as HTMLTableDataCellElement[]
            
            this.rows.push({
                columns: {},
                element: row,
            })

            for (let columnIndex=0;columnIndex < rowColumns.length;++columnIndex) {
                const column = rowColumns[columnIndex]

                this.rows[rowIndex].columns[this.headers[columnIndex]] = column
            }
        }
    }
}

export function searchThreadSync(): SearchResults {
    const currentLinkType = getLinkType(location.href)
    if (currentLinkType === LinkType.Section) {
        if (cached.searchResults) {
            return cached.searchResults
        } else {
            const forumContainer = document.querySelector<HTMLTableElement>("div.forumcontainer > table")
            const threadList = new SearchResults()
            if (forumContainer != null) {
                const tableData = new TableData(forumContainer)
                for (let i=0;i<tableData.rows.length;++i) {
                    const threadData = new ThreadData()
                    const trow = tableData.rows[i]
                    const threadColumn = trow.columns["thread"]
                    if (threadColumn != null) {
                        const threadAnchor = threadColumn?.firstElementChild as HTMLAnchorElement
                        const threadAuthorAnchor = threadColumn.children[1]?.firstElementChild as HTMLAnchorElement
                        threadData.Name = threadAnchor.textContent
                        threadData.Id = getThreadIdFromUrl(threadAnchor.href)
                        threadData.Author = getUserInfoFromTag(threadAuthorAnchor)
                    }
                    if (trow.columns["replies"] != null) {
                        threadData.Replies = parseInt(trow.columns["replies"]?.textContent)
                    }
                    if (trow.columns["views"] != null) {
                        threadData.Views = parseInt(trow.columns["views"]?.textContent)
                    }
                    if (trow.columns["lastreplier"]?.firstElementChild != null) {
                        threadData.LastReplier = getUserInfoFromTag(trow.columns["lastreplier"]?.firstElementChild as HTMLAnchorElement)
                    }
                    threadData.Section = trow.columns["forum"]?.firstElementChild?.textContent
                    threadList.Add(threadData)
                }
            }
            cached.searchResults = threadList
            return threadList
        }
    }
}