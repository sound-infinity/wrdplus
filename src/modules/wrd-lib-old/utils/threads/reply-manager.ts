import { getUserInfoFromTag } from "../page";

interface User {
    name: string
    id: number
}

interface ReplyAuthor extends User {
    reputation: number
    profileLink: string
    profilePictureLink: string
}

class ReplyData {
    private elements: {[key: string]: Element} = {}
    mentions: User[] = []
    author: ReplyAuthor

    constructor (container: HTMLDivElement) {
        //#region Indexing of reply elements
        this.elements.main = container;
        this.elements.profilePictureLink = container.querySelector(".thread_replierdata > a")
        this.elements.profilePicture = container.querySelector(".thread_replierdata > a > div")
        this.elements.profileUserLink = container.querySelector(".userdesc").firstElementChild
        this.elements.profileUserName = this.elements.profileUserLink.firstElementChild
        //this.elements.profileUserTitle
        const profileStats = container.querySelector(".userstats").children
        this.elements.profileStatPosts = profileStats[0]
        this.elements.profileStatThreads = profileStats[1]
        this.elements.profileStatJoinDate = profileStats[2]
        this.elements.profileStatReputationLabel = profileStats[3]
        this.elements.profileStatReputationCount = this.elements.profileStatReputationLabel.firstElementChild

        const replyCard = container.querySelector("div.replycard")
        this.elements.replyMenu = replyCard.querySelector("ul.reply_menu")
        this.elements.replyTime = replyCard.querySelector(".thread_replytime")
        this.elements.replyContent = replyCard.querySelector("div.thread_replycontent")

        this.elements.signature = container.querySelector("signature")
        this.author = {
            name: this.elements.profileUserName.textContent,
            reputation: parseInt(this.elements.profileStatReputationCount.textContent),
            profileLink: (this.elements.profileUserLink as HTMLAnchorElement).href,
            profilePictureLink: (this.elements.profilePicture as HTMLDivElement).style.backgroundImage.match(/url\("(.*?)"\)/)[1] || null,
            id: getUserInfoFromTag(this.elements.profileUserLink as HTMLAnchorElement).Id
        }
        //#endregion   

        //#region Indexing Of Mentions Within Body
        if (this.elements.replyContent != null) {
            for (const anchorLink of Object.values(this.elements.replyContent.querySelectorAll("a[href*=\"uid=\"]")) as HTMLAnchorElement[]) {
                if (anchorLink.textContent.startsWith("@")) {
                    const info = getUserInfoFromTag(anchorLink)
                    this.mentions.push({name: info.Name.substring(1), id: info.Id})    
                }
            }
        }
        //#endregion
    }

    /**
    public get actions() : HTMLButtonElement[] {
        return this.elements.replyMenu.children as unknown as HTMLButtonElement[]
    }
    */

    scrollIntoView() {
        this.elements.main.scrollIntoView()
    }
    
    public get contents() : string {
        return this.elements.replyContent.textContent
    }

    public set contents(v : string) {
        this.elements.replyContent.textContent = v;
    }
    
}

class RepliesManager {
    replies: ReplyData[] = []

    update_list() {
        for (const replyContainer of Object.values(document.querySelectorAll("div.replygroup") as NodeListOf<HTMLDivElement>)) {
            this.replies.push(new ReplyData(replyContainer))
        }
    }

    constructor() {
        this.update_list()
    }

    get_replies_from(userId: number) {
        const collection: ReplyData[] = []

        for (const reply of this.replies) {
            if (reply.author.id === userId) collection.push(reply)
        }

        return collection
    }
}

export const Replies = new RepliesManager()