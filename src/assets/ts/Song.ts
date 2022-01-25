export default interface Song {
    title: string,
    year: number,
    img: string,
    youtubeLink?: string,
    bandcampLink?: string,
    lyrics?: string[],
    isCover: boolean,
    originalArtist?: string,
    originalLink?: string,
    color: string,
    clipAvailable: boolean
}