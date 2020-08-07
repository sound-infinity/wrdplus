import { LineType } from '../enums'
import { GetLineList } from './utils'
import { TagData, TagList} from './classes/'
import { NoOverlap, Regexes } from './settings'

/**
* Looks for enclosed tags which have a [opening] and [/closing] tag.
* @param {Element} Container Where the tags are supposed to be in. 
*/


export default function TagScanner(Container) {
    const Elements = Container.children

    const Tags = new TagList()

    const Lines = GetLineList(Elements);

    function GetLineType(LineText) {
        if (LineText.match(Regexes.OpeningTag)) {
            return LineType.OPENING;
        } else if (LineText.match(Regexes.ClosingTag)) {
            return LineType.CLOSING;
        }
    }

    function OpenTag(index) {
        const Line = Lines[index]
        const Tag = new TagData(Line.Value, Tags.getAParent())
        Tag.Elements.Opening = Line.Target
        Tags.add(Tag)
    }
    
    function CloseTag(index) {
        const Line = Lines[index];

        for (let Tag of Tags.collection) {
            if (!Tag.isClosed && Tag.Name === Line.Value.replace("/", "").replace(Regexes.RemoveBrackets, "").toUpperCase()) {
                Tag.isClosed = true
                Tag.Elements.Closing = Line.Target
                break
            }
        }
    }

    function AddContent(index) {
        const Line = Lines[index]
        let OpenTag
        for (const Tag of Tags.collection) {
            if (!Tag.isClosed) {
                OpenTag = Tag
            }
        }
        OpenTag.Contents.push([Line.Value, Line.Target])
    }

    for (let index in Lines) {
        const Line = Lines[index];
        if (GetLineType(Line.Value) === LineType.OPENING) {
            const Parent = Tags.getAParent();
            if (Parent && Parent.Name in NoOverlap) {
                AddContent(index);
            } else {
                OpenTag(index);
            }
        } else if (GetLineType(Line.Value) === LineType.CLOSING) {
            CloseTag(index);
        } else if (Tags.isAnyTagOpen()) {
            AddContent(index);
        }
    }
    return Tags.collection
}