import TagScanner from './parser'
import { GetLineList } from './utils'
import { RawTags, AllowedTags } from './settings'
import { Content, TagData } from './classes'
/**
 * 
 * @param {Element} reply Reply body where tags would commonly be used in. 
 * @param {Function} onWrap Function that's called each time a new tag has been created.
 */
export default function CheckReply(reply: HTMLDivElement, onWrap?: Function) {
    const Tags: TagData[] = TagScanner(reply)
    const Containers: HTMLElement[] = []
    for (const Tag of Tags) {
        if (Tag.isClosed) {
            const container: HTMLElement = document.createElement(Tag.Name in AllowedTags ? Tag.Name : "div")
            for (const content of Tag.Contents) {
                if (Tag.Name in RawTags) {
                    container.appendChild(content.element)
                } else {
                    const newLineElement = document.createElement("span")
                    newLineElement.textContent = content.element.textContent
                    container.appendChild(newLineElement)
                    content.element.remove()
                }
            }
            
            Tag.Contents = GetLineList(container.children).map(line => new Content(line.Value, line.Target))
            Tag.Elements.Opening.parentNode.insertBefore(container, Tag.Elements.Opening)
            Tag.Elements.Opening.remove()
            Tag.Elements.Closing.remove()
            Tag.Container = container

            if (Tag.Parent && Tag.Parent.Container) Tag.Parent.Container.appendChild(container)
            if (onWrap) onWrap(container, Tag)
            if (container) Containers.push(container)                
        }
    }
}
