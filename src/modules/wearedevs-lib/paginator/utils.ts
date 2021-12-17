export function extractIndex(sourceCode: string) {
    const matches = sourceCode.match(/ChangePage\(.?([0-9]+).?\)|/)
    if (matches != null && matches.length > 0) return parseInt(matches[1])
}
