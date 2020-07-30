export const LinkType = {
    NEWREPLY: 'newreply',
    PROFILE: 'profile',
    SECTION: 'section',
    THREAD: 'thread',
    INDEX: 'index',
    /**
     * 
     * @param {string} url
     * @returns {string} LinkType
     */
    getLinkType: function (url) {
        if (typeof url === "string" && this) {

            if (url.match(/profile\?uid=[0-9]+/)) {
                return this.PROFILE
            } else if (url.match(/\/newreply/g)) {
                return this.NEWREPLY
            } else if (url.match(/forum\/t\/[0-9]+/)) {
                return this.THREAD
            } else if (url.match(/forum\/[A-z]+/)) {
                return this.SECTION
            } else if (url.match(/forum[/]?/)) {
                return this.INDEX
            }
        }
    }
}