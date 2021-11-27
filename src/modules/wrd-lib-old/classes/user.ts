export default class User {
    public Name: string;
    public Id: number;
    public ProfileImageUrl: string;

    constructor(userName: string, userId: string|number = 0) {
        this.Name = userName
        this.Id = typeof userId === 'number' ? userId : parseInt(userId)
        this.ProfileImageUrl = ''
    }

    get profileUrl(): string {
        return `https://wearedevs.net/profile/?uid=${this.Id}`
    }

    toString(): string {
        return `${this.Name}#${this.Id}`
    }
}