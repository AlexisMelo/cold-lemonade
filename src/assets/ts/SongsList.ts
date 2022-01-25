import Song from "@/assets/ts/Song";

const SongsList = [{
    title: "La clairière",
    year: 2021,
    img: require("@/assets/img/illustrations_chansons/tremplin.png"),
    youtubeLink: "https://youtu.be/0Om1RtvtzyE?t=1",
    isCover: false,
    color: "#952348",
    clipAvailable: false
},{
    title: "Les larmes",
    year: 2021,
    img: require("@/assets/img/illustrations_chansons/tremplin.png"),
    youtubeLink: "https://youtu.be/0Om1RtvtzyE?t=180",
    isCover: false,
    color: "#952348",
    clipAvailable: false
},{
    title: "Sommeil d'Or",
    year: 2021,
    img: require("@/assets/img/illustrations_chansons/tremplin.png"),
    youtubeLink: "https://youtu.be/0Om1RtvtzyE?t=324",
    isCover: false,
    color: "#952348",
    clipAvailable: false
},{
    title: "Lighthouse",
    year: 2021,
    img: require("@/assets/img/illustrations_chansons/tremplin.png"),
    youtubeLink: "https://youtu.be/0Om1RtvtzyE?t=592",
    isCover: false,
    color: "#952348",
    clipAvailable: false
},{
    title: "Just the way you are",
    year: 2021,
    img: require("@/assets/img/illustrations/fleur.png"),
    youtubeLink: "https://www.youtube.com/watch?v=0JhGUpw_xyA",
    lyrics: ["Oh, her eyes, her eyes", "Make the stars look like they're not shinin'"],
    isCover: true,
    originalArtist: "Bruno Mars",
    originalLink: "https://www.youtube.com/watch?v=LjhCEhWiKXk",
    color: "#aadff6",
    clipAvailable: false
}, {
    title: "Sunflower - Sierra Burgress is a Loser",
    year: 2019,
    img: require("@/assets/img/illustrations_chansons/sunflower.png"),
    youtubeLink: "https://www.youtube.com/watch?v=S9UwptDTgcE",
    isCover: true,
    originalArtist: "Shannon Purser",
    originalLink: "https://www.youtube.com/watch?v=i4nPvdFeEJs",
    color: "#fff984",
    clipAvailable: false
}, {
    title: "I hope",
    year: 2018,
    img: require("@/assets/img/illustrations_chansons/i_hope.jpg"),
    bandcampLink: "https://coldlemonade.bandcamp.com/track/i-hope",
    isCover: false,
    color: "#bcb3ae",
    clipAvailable: false
}, {
    title: "Melocactus Tropidurus",
    year: 2018,
    img: require("@/assets/img/illustrations_chansons/saurochoria.jpg"),
    bandcampLink: "https://coldlemonade.bandcamp.com/track/melocactus-tropidurus",
    isCover: false,
    color: "#ace0f8",
    clipAvailable: false
}, {
    title: "Partner In Life (And My One True Love)",
    year: 2018,
    img: require("@/assets/img/illustrations_chansons/saurochoria.jpg"),
    bandcampLink: "https://coldlemonade.bandcamp.com/track/partner-in-life-and-my-one-true-love",
    isCover: false,
    color: "#ace0f8",
    clipAvailable: false
}, {
    title: "Help",
    year: 2018,
    img: require("@/assets/img/illustrations/citron.png"),
    youtubeLink: "https://www.youtube.com/watch?v=oxQHdyvv1Og",
    isCover: true,
    originalArtist: "The Beatles",
    originalLink: "https://www.youtube.com/watch?v=2Q_ZzBGPdqE",
    color: "#f1d23a",
    clipAvailable: false
}, {
    title: "Someday",
    year: 2018,
    img: require("@/assets/img/illustrations/citron.png"),
    youtubeLink: "https://www.youtube.com/watch?v=K6s_91QTIA0",
    isCover: true,
    originalArtist: "The Strokes",
    originalLink: "https://www.youtube.com/watch?v=knU9gRUWCno",
    color: "#f1d23a",
    clipAvailable: false
}, {
    title: "My smile is extinct",
    year: 2018,
    img: require("@/assets/img/illustrations/quartier_citron.png"),
    youtubeLink: "https://www.youtube.com/watch?v=v_MgJ2N9w6c",
    isCover: true,
    originalArtist: "Kane Strang",
    originalLink: "https://www.youtube.com/watch?v=pBEv_9t61Xk",
    color: "#a5eb67",
    clipAvailable: false
}, {
    title: "Stephanie Says",
    year: 2018,
    img: require("@/assets/img/illustrations/quartier_citron.png"),
    youtubeLink: "https://www.youtube.com/watch?v=CPtXaN3sB8Y",
    isCover: true,
    originalArtist: "The Velvet Underground",
    originalLink: "https://www.youtube.com/watch?v=weRw8vTKzAw",
    color: "#a5eb67",
    clipAvailable: false
}, {
    title: "Ambitious Song",
    year: 2017,
    img: require("@/assets/img/illustrations_chansons/ambitious_song.png"),
    youtubeLink: "https://www.youtube.com/watch?v=QTbXTB4Ylu0",
    bandcampLink: "https://coldlemonade.bandcamp.com/track/ambitious-song",
    isCover: false,
    color: "#7c2833",
    clipAvailable: true
}, {
    title: "Video games",
    year: 2017,
    img: require("@/assets/img/illustrations/glacon.png"),
    youtubeLink: "https://www.youtube.com/watch?v=By_d367F4XM",
    isCover: true,
    originalArtist: "Lana Del Rey",
    originalLink: "https://www.youtube.com/watch?v=cE6wxDqdOV0",
    color: "#ace0f8",
    clipAvailable: false
}, {
    title: "Jimmy",
    year: 2016,
    img: require("@/assets/img/illustrations_chansons/jimmy.png"),
    youtubeLink: "https://www.youtube.com/watch?v=Azys3eL6Mng",
    isCover: true,
    originalArtist: "Moriarty",
    originalLink: "https://www.youtube.com/watch?v=lnbl94GZ6TM",
    color: "#1f420e",
    clipAvailable: true
}, {
    title: "It Girl",
    year: 2016,
    img: require("@/assets/img/illustrations_chansons/it_girl.png"),
    youtubeLink: "https://www.youtube.com/watch?v=9iQof6UUr2s",
    isCover: true,
    originalArtist: "The Brian Jonestown Massacre",
    originalLink: "https://www.youtube.com/watch?v=4Wu0463vdF0",
    color: "#604132",
    clipAvailable: true
}, {
    title: "Riptide",
    year: 2016,
    img: require("@/assets/img/illustrations/citron.png"),
    youtubeLink: "https://www.youtube.com/watch?v=qFqoVMX3zbI",
    isCover: true,
    originalArtist: "Vance Joy",
    originalLink: "https://www.youtube.com/watch?v=uJ_1HMAGb4k",
    color: "#f1d23a",
    clipAvailable: false
}] as Song[]

export default SongsList