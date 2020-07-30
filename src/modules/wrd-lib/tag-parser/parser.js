import { GetLineList } from './utils'
import { NoOverlap, Regexes } from './settings'
import TagData from './tag-data.class'

/**
* Looks for enclosed tags which have a [opening] and [/closing] tag.
* @param {Element} Container Where the tags are supposed to be in. 
*/
export default function TagScanner(Container) {
    const Elements = Container.children

    let OpenTags = 0;
    const Tags = []

    const LineType = {
        "OPENING": 0,
        "CLOSING": 1,
    };

    const Lines = GetLineList(Elements);

    function GetLineType(LineText) {
        if (LineText.match(Regexes.OpeningTag)) {
            return LineType.OPENING;
        } else if (LineText.match(Regexes.ClosingTag)) {
            return LineType.CLOSING;
        }
    }

    function GetParent() {
        let Parent;

        if (OpenTags > 0) {
            for (const Tag of Tags) {
                if (!Tag.isClosed) {
                    Parent = Tag;
                }
            }
        }

        return Parent;
    }

    function OpenTag(index) {
        const [Text, Element] = Lines[index]
        const Tag = new TagData(Text, [], GetParent())
        Tag.Elements.Opening = Element
        Tags.push(Tag)

        ++OpenTags;
    }

    //TODO: Change '==' to '==='
    function CloseTag(index) {
        const [Text, Element] = Lines[index];

        for (let Tag of Tags) {
            if (!Tag.isClosed && Tag.Name == Text.replace("/", "").replace(Regexes.RemoveBrackets, "").toUpperCase()) {
                Tag.isClosed = true
                Tag.Elements.Closing = Element
                OpenTags--
                break
            }
        }
    }

    function AddContent(index) {
        const [LineText, LineElement] = Lines[index]

        let OpenTag

        for (const Tag of Tags) {
            if (!Tag.isClosed) {
                OpenTag = Tag
            }
        }

        OpenTag.Contents.push([LineText, LineElement])
    }

    for (let index in Lines) {
        const [Text] = Lines[index];

        if (GetLineType(Text) === LineType.OPENING) {
            const Parent = GetParent();

            if (Parent && Parent.Name in NoOverlap) {
                AddContent(index);
            } else {
                OpenTag(index);
            }
        } else if (GetLineType(Text) === LineType.CLOSING) {
            CloseTag(index);
        } else if (OpenTags > 0) {
            AddContent(index);
        }
    }

    return Tags;
}