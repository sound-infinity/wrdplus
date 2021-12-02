import { LineType } from '../enums'
import { GetLineList } from './utils'
import { TagData, TagList, Content, LineData } from './classes'
import { NoOverlap, Regexes } from './settings'

/**
* Looks for enclosed tags which have a [opening] and [/closing] tag.
* @param {Element} Container Where the tags are supposed to be in. 
*/


export default function TagScanner(Container: Element) {
    const Elements: HTMLCollection = Container.children

    const Tags = new TagList()

    const Lines: LineData[] = GetLineList(Elements)

    function GetLineType(LineText: string) {
        if (LineText.match(Regexes.OpeningTag)) {
            return LineType.OPENING;
        } else if (LineText.match(Regexes.ClosingTag)) {
            return LineType.CLOSING;
        }
    }

    function OpenTag(index: number) {
        const Line = Lines[index]
        const Tag = new TagData(Line.Value, Tags.getAParent())
        Tag.Elements.Opening = Line.Target
        Tags.add(Tag)
    }
    
    function CloseTag(index: number) {
        const Line = Lines[index];

        for (let Tag of Tags.collection) {
            if (!Tag.isClosed && Tag.Name === Line.Value.replace("/", "").replace(Regexes.RemoveBrackets, "").toUpperCase()) {
                Tag.isClosed = true
                Tag.Elements.Closing = Line.Target
                break
            }
        }
    }

    function AddContent(index: number) {
        const Line = Lines[index]
        let OpenTag
        for (const Tag of Tags.collection) {
            if (!Tag.isClosed) {
                OpenTag = Tag
            }
        }
        OpenTag.Contents.push(new Content(Line.Value, Line.Target))
    }

    for (let i=0;i<Lines.length;++i) {
        const Line = Lines[i]
        if (GetLineType(Line.Value) === LineType.OPENING) {
            const Parent = Tags.getAParent();
            if (Parent && Parent.Name in NoOverlap) {
                AddContent(i)
            } else {
                OpenTag(i)
            }
        } else if (GetLineType(Line.Value) === LineType.CLOSING) {
            CloseTag(i)
        } else if (Tags.isAnyTagOpen()) {
            AddContent(i)
        }
    }

    return Tags.collection
}