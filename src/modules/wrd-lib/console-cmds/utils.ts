export class CommandInfo {
    name: string
    aliases: string[]
    description: string
    handler: () => void
    constructor(_name: string|string[], _description: string, _handler: (...args: string[]) => void) {
        this.name = typeof _name === "string" ? _name : _name[0]
        this.aliases = typeof _name === "object" ? _name.splice(1) : []
        this.description = _description
        this.handler = _handler
    }
}

export class CommandList {
    collection: CommandInfo[] = []
    constructor() {

    }

    Search(commandName: string) {
        for (const command of this.collection) {
            if (command.name.toLowerCase().startsWith(commandName.toLowerCase())) {
                return command
            } else {
                for (const alias of command.aliases) {
                    if (alias.toLowerCase().startsWith(commandName.toLowerCase())) {
                        return command
                    }
                }
            }
        }
    }

    Add(...args: [string|string[], string, (...args: string[]) => void]) {
        this.collection.push(new CommandInfo(...args))
    }
}