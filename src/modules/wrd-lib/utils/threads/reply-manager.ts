/*
TODO: Complete Reply Element
class ReplyElements {
    elements: any = {}
    constructor() {
        this.elements.main_container = document.createElement<"div">("div")
         this.elements.user_container = document.createElement<"div">("div")
          this.elements.user_picture_container = document.createElement<"div">("div")
           this.elements.user_picture = document.createElement<"div">("div")
          this.elements.user_description = document.createElement("div")
           this.elements.user_name_link = document.createElement("a")
            this.elements.user_name_link = document.createElement("")
    }
}
*/

interface ReplyAuthor {
    name: string
    reputation: number
    profileLink: string
    profilePictureLink: string

}

class ReplyData {
    private elements: {[key: string]: Element} = {}
    author: ReplyAuthor

    constructor (container: HTMLDivElement) {
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

        const ReplyCard = container.querySelector("div.replycard")
        this.elements.replyMenu = ReplyCard.querySelector("ul.reply_menu")
        this.elements.replyTime = ReplyCard.querySelector(".thread_replytime")
        this.elements.replyContent = ReplyCard.querySelector("div.thread_replycontent")

        this.elements.signature = container.querySelector("signature")

        this.author = {
            name: this.elements.profileUserName.textContent,
            reputation: parseInt(this.elements.profileStatReputationCount.textContent),
            profileLink: (this.elements.profileUserLink as HTMLAnchorElement).href,
            profilePictureLink: (this.elements.profilePicture as HTMLDivElement).style.backgroundImage.match(/url\("(.*?)"\)/)[1] || null
        }
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

}

export const Replies = new RepliesManager()