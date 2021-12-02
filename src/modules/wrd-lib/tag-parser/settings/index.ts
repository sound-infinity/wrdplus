export const AllowedTags = {
    "CODE": true,
    "SPOILER": true
}

export const NoOverlap = {
    "CODE": true
}

export const RawTags = {
    "SPOILER": true
}

export const TagHandlers: {[handlerName: string]: Function} = {
    "CODE": function () {
        // const SourceContainer = document.createElement("div");
        const TitleContainer = document.createElement("div");
        const Selectable = document.createElement("div");
        const Heading = document.createElement("h1");

        //SourceContainer.className = "source";
        TitleContainer.className = "head";
        Selectable.className = "source";
        Heading.textContent = "Code";

        TitleContainer.appendChild(Heading);

        this.appendChild(TitleContainer);
        this.appendChild(Selectable);

        //SourceContainer.appendChild(Selectable);

        const SpanElements = this.querySelectorAll("span");

        for (let i = 0; i < SpanElements.length; ++i) {
            Selectable.appendChild(SpanElements[i]);
        }
    },
    "SPOILER": function (container: HTMLElement) {
        container.addEventListener('click', function (e: MouseEvent) {
            if (e.target === container)
                this.setAttribute('open', (this.getAttribute('open') !== 'true').toString())
        })
    }
}

export const Regexes = {
    "RemoveBrackets": /[[\]|/]/g, // [anyTag] --> anyTag 
    "ClosingTag": /^\[\/[A-z]+\]/gi, // [anyTag]
    "OpeningTag": /^\[[A-z]+\]/gi, // [/anyTag]
}

export default { TagHandlers, AllowedTags, NoOverlap, RawTags, Regexes }