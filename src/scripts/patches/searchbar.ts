export function getSearchBar() {
    return document.querySelector("#searchbar")
}

export function formatSearch(query: string) {
    const queries = new URLSearchParams(location.search)
    queries.set("search", query)
    return `?${queries.toString()}`
}

export function initialize() {
    const searchbar = getSearchBar()
    if (searchbar == null) return
    searchbar.addEventListener("keydown", (ev) => {
        if ((<KeyboardEvent>ev).key === "enter" || (<KeyboardEvent>ev).keyCode === 13) {
            const query = (<HTMLInputElement>ev.target).value
            if (query.length > 0) {
                location.search = formatSearch(query)
            }
            ev.preventDefault()
        }
    })
}
