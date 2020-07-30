import { LinkType } from '../enums'

//tag-parser
export const AllowedTags = {
    "CODE": true,
    "SPOILER": true,
}

export const RawTags = {
    "SPOILER": true
}

export const NoOverlap = {
    "CODE": true
}

export const TagHandlers = {
    "CODE": function () {
        let TitleContainer = document.createElement("div");
        let Selectable = document.createElement("div");
        let Heading = document.createElement("h1");

        TitleContainer.className = "head";
        Selectable.className = "source";
        Heading.textContent = "Code";

        TitleContainer.appendChild(Heading);

        this.appendChild(TitleContainer);
        this.appendChild(Selectable);

        let SpanElements = this.querySelectorAll("span");
        for (let i = 0; i < SpanElements.length; ++i) {
            Selectable.appendChild(SpanElements[i]);
        }
    },
    "SPOILER": function (container) {
        console.log("Called me;", container)
        this.addEventListener('click', function (e) {
            console.log(e, this.getAttribute('open'))
            if (e.target === container)
                this.setAttribute('open', (this.getAttribute('open') !== 'true').toString())
        })
    }
}

/**
 * Gets child nodes that are text types.
 * @param {Element} element
 * @returns List of text nodes. 
 */
function getTextOnly(element) {
    return [].reduce.call(element.childNodes, function (child0, child1) {
        return child0 + (child1.nodeType === 3 ? child1.textContent : '');
    }, '');
}

/**
 * Looks for enclosed tags which have a [opening] and [closing] tag.
 * @param {Element} Container Where the tags are supposed to be in. 
 */
function TagScanner(Container) {
    const Elements = Container.children;
    const Lines = [];

    for (let element of Elements) {
        Lines.push([getTextOnly(element), element]);
    }

    let OpenTags = 0; // How many tags are currently opened?
    const Tags = []; // What tags have been identified?
    const Regexes = {
        "RemoveBrackets": /[[\]|/]/g, // [anyTag] --> anyTag 
        "ClosingTag": /^\[\/[A-z]+\]/gi, // [anyTag]
        "OpeningTag": /^\[[A-z]+\]/gi, // [/anyTag]
    };

    function GetParent() {
        let Parent;
        if (OpenTags > 0) {
            // Look for the last tag that's open
            for (let i = 0; i < Tags.length; i++) {
                if (Tags[i].length < 4) {
                    Parent = Tags[i] || null;
                }
            }
        }

        return Parent;
    }

    function OpenTag(index) {
        let Contents = [];
        let Line = Lines[index];
        let Parent = GetParent();

        Tags.push([Line, Contents, Parent]);
        OpenTags++;
    }

    function CloseTag(index) {
        const [LineText, LineElement] = Lines[index]; // [Text, From]

        for (let i = 0; i < Tags.length; i++) {
            // Look for an open tag
            if (Tags[i].length < 4 && Tags[i][0][0] == LineText.replace("/", "")) {
                Tags[i].push([LineText, LineElement])
                OpenTags--;
                break;
            }
        }
    }

    function AddContent(index) {
        const [LineText, LineElement] = Lines[index]; // [Text, From]

        let Index = 0;
        for (let i = 0; i < Tags.length; i++) {
            if (Tags[i].length < 4) {
                Index = i;
            }
        }

        Tags[Index][1].push([LineText, LineElement]);
    }

    for (let index in Lines) {
        const [LineText] = Lines[index]; // [Text, From]

        if (LineText.match(Regexes.OpeningTag)) {
            let Parent = GetParent();

            if (Parent && Parent[0] && Parent[0][0].replace(Regexes.RemoveBrackets, "").toUpperCase() in NoOverlap) {
                AddContent();
            } else {
                OpenTag(index);
            }
        } else if (LineText.match(Regexes.ClosingTag) && OpenTags > 0) {
            CloseTag(index);
        } else if (OpenTags > 0 && Tags[OpenTags - 1]) {
            AddContent(index);
        }
    }

    return Tags;
}

/**
 * 
 * @param {Element} reply Reply body where tags would commonly be used in. 
 * @param {Function} onWrap Function that's called each time a new tag has been created.
 */
function checkReply(reply, onWrap) {
    let Tags = TagScanner(reply);
    let Containers = [];
    for (let index0 in Tags) {
        if (Tags[index0].length < 4) { continue; }
        let [[tagName, openingTag], contents, belongsTo, [, closingTag]] = Tags[index0];
        tagName = tagName.toLowerCase().replace(/[[\]|/]/g, () => { return ""; }).toUpperCase();

        if (!(tagName in AllowedTags)) {
            tagName = "div";
        }

        let container = document.createElement(tagName);

        for (let index1 in contents) {
            let lineElement = contents[index1][1];

            if (tagName.toUpperCase() in RawTags) {
                container.appendChild(lineElement);
            } else {
                let newlineElement = document.createElement("span");

                newlineElement.textContent = lineElement.textContent;
                container.appendChild(newlineElement);

                lineElement.remove();
            }
        }

        openingTag.parentNode.insertBefore(container, openingTag);
        openingTag.remove();
        closingTag.remove();

        Tags[index0].push(container);

        if (belongsTo && belongsTo[belongsTo.length - 1]) belongsTo[belongsTo.length - 1].appendChild(container);
        if (onWrap) onWrap(container);
        if (container) Containers.push(container);
    }
}

/**
 * Checks for handlers for newly created tags.
 * @param {Element} tag New tag element
 */
function onWrap(tag) {
    let name = tag.tagName.toUpperCase();
    if (name in TagHandlers) {
        try {
            TagHandlers[name].call(tag, tag);
        } catch (err) {
            console.error("Error Ocurred:", err);
        }
    }
}

/**
 * Goes through a list of replies.
 * @param {array} replies 
 */
function goThru(replies) {
    for (let reply of replies) {
        if (reply.tagName && reply.tagName === "DIV") {
            checkReply(reply, onWrap);
        }
    }
}

export function ParsePage() {
    // Goes through activitycards or replies. 
    if (LinkType.getLinkType() === "PROFILE") {
        goThru(document.querySelectorAll(".activitycard > div"));
        try {
            function callback(mutationList) {
                for (let mutation of mutationList) {
                    if (mutation.type === "childList") {
                        goThru(mutation.addedNodes);
                    }
                }
            }

            let container = document.querySelector('#activityfeed > .activitycards');
            let observer = new MutationObserver(callback);

            observer.observe(container, { childList: true });
        } catch (err) { };
    } else {
        goThru(document.querySelectorAll(".thread_replycontent"));
    }
}

export default { Config: { AllowedTags, RawTags, NoOverlap, TagHandlers }, ParsePage }