import { ThreadData } from '../classes'
import { Notifications } from '../dropdown-menus'
import { searchThreadAsync } from '../thread-searcher'
import { Terminal as TerminalClass } from './terminal'
import { CommandInfo, CommandList } from  './utils'

const Terminal: TerminalClass = new TerminalClass("[wrdplus]: ")
const Commands: CommandList = new CommandList()
let pauseInput: boolean = false
Terminal.show()

Commands.Add(["exit", "close"], "Closes & removes terminal.", () => {
    Terminal.elements.window.remove()
})

Commands.Add(["help", "cmds"], "Shows a list of commands.", () => {
    for (const cmd of Commands.collection) {
        Terminal.sendMessage(`${cmd.name} - ${cmd.description}`)    
    }
})

Commands.Add(['clear', 'cls'], 'Clears the output window.', () => {
    Terminal.elements.body.textContent = ""
})

Commands.Add("search", "Looks up a thread", (content) => {
    pauseInput = true
    Terminal.sendMessage("Starting search...")
    searchThreadAsync(content||"").then((results) => {
        const msgs: any[] = []

        for(const threadData of results.collection) {
            msgs.push([threadData.Name, threadData.Replies.toString(), threadData.Section, `<a href="${threadData.Url}">Visit</a>`])
        }

        msgs.sort((a: string[], b: string[]) => {
            return a[0].length > b[0].length ? 1 : -1
        })
        
        let maxChar: number = msgs[0].length
        msgs.forEach((val: string[]) => {
            val[0] = val[0].substring(0, maxChar)
            if (val[0].length > maxChar) {
                val[0] += ("&nbsp;").repeat(val[0].length - maxChar)
            } else {
                val[0] += ("&nbsp;").repeat(maxChar - val[0].length)                
            }
            Terminal.sendMessage(val.join(" | ").toUpperCase())
        })
        pauseInput = false
    })
})

Commands.Add("fetch", "Fetches a url", (content, args) => {
    pauseInput = true
    Terminal.sendMessageWithData({
        prefix: "[INFO]",
        text: `Fetching "${args[0]}"...`,
        css: "color:lightblue"
    })
    fetch(args[0]).then((res) => res.text()).then((txt) => Terminal.sendMessageWithData({text: txt}))
    pauseInput = false
})

Commands.Add("notification", "Tests notification function.", (content) => {
    Notifications.addMessage({
        description: content, 
    })
    Terminal.sendMessage("Notification sent!")
})

Terminal.sendMessage("Welcome to the wrdplus's terminal emulator!")
Terminal.sendMessage("Made by SoundInfinity")

Terminal.oncommand = function(e) {
    Terminal.elements.body.scrollTop = Terminal.elements.body.scrollHeight

    if (pauseInput || this.value.length < 1) return;
    let args = this.value.split(" ")
    const cmd = Commands.Search(args[0])
    args = args.splice(1)
    const content = args.join(" ")

    if (cmd)
        cmd.handler.call(cmd, content, args)
    else
        Terminal.sendMessageWithData({
            text: "Command not found.",
            prefix: "[error]",
            css: "color:red"
        })
    
    this.value = ""
}
