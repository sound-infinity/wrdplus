import { User } from '../classes'

export default class ThreadData {
    public Author: User
    public Name: string
    public Section: string
    public Replies: number
    public Views: number
    public Url: string
    public Id: number
    public LastReplier: User
    public CreatedAt: number

    constructor(threadName : string = '', threadId : string|number = 0, threadReplies? : string, threadViews? : string, threadAuthor? : User, threadLastReplier? : User, threadSection? : string, threadUrl? : string) {
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

        this.Id = typeof threadId === 'number' ? threadId : parseInt(threadId.toString())
        this.Views = parseInt(threadViews)
        this.Replies = parseInt(threadReplies)

        this.CreatedAt = (new Date()).getTime()
    }
}

