export default class ThreadData {
    /**
     * 
     * @param {string} threadName 
     * @param {number} threadId 
     * @param {number} threadReplies 
     * @param {number} threadViews 
     * @param {User} threadAuthor 
     * @param {User} threadLastReplier
     * @param {string} threadSection
     * @param {string} threadUrl 
     */
    constructor(threadName, threadId, threadReplies, threadViews, threadAuthor, threadLastReplier, threadSection, threadUrl) {
        this.Name = threadName
        this.Section = threadSection
        this.Author = threadAuthor
        this.LastReplier = threadLastReplier

        if (threadUrl) {
            this.Url = threadUrl
        } else {
            const Relative = new URL(`/forum/t/${threadId}`, location.href)
            this.Url = Relative.href
        }

        this.Id = parseInt(threadId)
        this.Views = parseInt(threadViews)
        this.Replies = parseInt(threadReplies)

        this.CreatedAt = (new Date()).getTime()
    }
}