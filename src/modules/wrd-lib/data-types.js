// Enums
export const LinkType = {
    PROFILE: 'profile',
    SECTION: 'section',
    THREAD: 'thread',
    INDEX: 'index'
}

// Classes
export class SearchResults {
    /**
     * 
     * @param {ThreadData[]} threadDataCollection 
     */
    constructor(threadDataCollection) {
        this.collection = Object.values(threadDataCollection)
    }

    /**
     * 
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
     * 
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
}

export class User {
    constructor(userName, userId) {
        this.Name = userName
        this.Id = parseInt(userId)
    }
}

export class ThreadData {
    /**
     * 
     * @param {string} threadName 
     * @param {number} threadId 
     * @param {number} threadReplies 
     * @param {number} threadViews 
     * @param {User} threadAuthor 
     * @param {string} threadSection 
     * @param {User} threadLastReplier
     * @param {string} threadUrl 
     */
    constructor(threadName, threadId, threadReplies, threadViews, threadAuthor, threadSection, threadLastReplier, threadUrl) {
        this.Name = threadName
        this.Section = threadSection
        this.Author = threadAuthor
        this.Replier = threadLastReplier

        if (threadUrl) {
            this.Url = threadUrl
        } else {
            const Relative = new URL(location.href)
            Relative.pathname = threadUrl || `/forum/t/${threadId}`
            this.Url = Relative.href
        }

        this.Id = parseInt(threadId)
        this.Views = parseInt(threadViews)
        this.Replies = parseInt(threadReplies)

        this.CreatedAt = (new Date()).getTime()
    }
}

export class ThreadQuery {
    /**
     * 
     * @param {string} threadName 
     * @param {number} threadId 
     * @param {string} threadSection
     */
    constructor(threadName, threadId) {
        this.Name = threadName
        this.Id = threadId
    }
}

// SECTION Prototypes
LinkType.__proto__.getLinkType = function (url) {
    if (typeof url === "string" && this) {

        if (url.match(/profile\?uid=[0-9]+/)) {
            return this.PROFILE
        } else if (url.match(/forum\/t\/[0-9]+/)) {
            return this.THREAD
        } else if (url.match(/forum\/[A-z]+/)) {
            return this.SECTION
        } else if (url.match(/forum[/]?/)) {
            return this.INDEX
        }
    }
}