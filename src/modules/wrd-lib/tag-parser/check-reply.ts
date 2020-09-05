import TagScanner from './parser'
import { GetLineList } from './utils'
import { RawTags, AllowedTags } from './settings'
import { Content } from './classes'
/**
 * 
 * @param {Element} reply Reply body where tags would commonly be used in. 
 * @param {Function} onWrap Function that's called each time a new tag has been created.
 */
export default function CheckReply(reply: HTMLDivElement, onWrap?: Function) {
    const Tags = TagScanner(reply)
    const Containers = []

    for (const Tag of Tags) {
        if (!Tag.isClosed) {
            continue
        }

        const Container = document.createElement(Tag.Name in AllowedTags ? Tag.Name : "div")

        for (const content of Tag.Contents) {
            if (Tag.Name in RawTags) {
                Container.appendChild(content.element)
            } else {
                const newLineElement = document.createElement("span")
                newLineElement.textContent = content.element.textContent

                Container.appendChild(newLineElement)
                content.element.remove()
            }
        }

        Tag.Contents = GetLineList(Container.children).map(line => new Content(line.Value, line.Target))

        Tag.Elements.Opening.parentNode.insertBefore(Container, Tag.Elements.Opening)
        Tag.Elements.Opening.remove()
        Tag.Elements.Closing.remove()

        Tag.Container = Container

        if (Tag.Parent && Tag.Parent.Container) Tag.Parent.Container.appendChild(Container)

        if (onWrap) onWrap(Container, Tag)
        if (Container) Containers.push(Container)
    }
}
