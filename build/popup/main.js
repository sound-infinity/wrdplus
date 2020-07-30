class Popup {
    constructor(title = "WRD+", description = "No content provided for description.", onClose) {
        this.closeButton = document.createElement("div")
        this.description = document.createElement("p")
        this.container = document.createElement("div")
        this.contents = document.createElement("div")
        this.heading = document.createElement("h1")
        this.header = document.createElement("div")
        this.body = document.createElement("div")

        this.container.className = "modal-popup"
        this.contents.className = "modal-contents theme1"
        this.header.className = "modal-header"
        this.body.className = "modal-body"
        this.closeButton.className = "modal-close-btn"

        this.closeButton.innerText = "+"

        this.setTitle(title)
        this.setDescription(description)

        this.header.appendChild(this.heading)
        this.body.appendChild(this.description)
        this.contents.appendChild(this.closeButton)
        this.contents.appendChild(this.header)
        this.contents.appendChild(this.body)
        this.container.appendChild(this.contents)

        this.onClose = onClose
        this.closeButton.addEventListener("click", (function () { this.close(...arguments) }).bind(this))
    }

    setTitle(title) {
        this.heading.innerText = title
    }

    setDescription(description) {
        if (typeof description === "object") {
            description = description.join('\n')
        }
        this.description.innerText = description
    }

    close() {
        this.container.remove()
        if (typeof this.onClose === "function") {
            this.onClose.call(this, ...arguments)
        }
    }

    show() {
        if (document.body.querySelector(".modal-popup")) {
            return new Error("Found another popup")
        } else {
            document.body.appendChild(this.container)
        }
    }
}

const pop = new Popup()
pop.show()