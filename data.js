fix this code: /**
 * CineStream Production CMS Database File
 * * INSTRUCTIONS TO ADD NEW CONTENT:
 * 1. Copy an entire object block (from { down to },).
 * 2. Paste it inside the contentDatabase array.
 * 3. Update the properties. Ensure 'releaseDate' uses the YYYY-MM-DD format 
 * so the engine can automatically select the newest titles for the header slides.
 */

const contentDatabase = [
    {
        id: "bhooth-bangla-2026",
        title: "Bhooth Bangla (2026)",
        type: "movie",
        genre: "Horror / Comedy",
        industry: "bollywood", // Correctly maps to Bollywood Hits row
        rating: "7.9",
        poster: "https://filmyzilla40.com/site_uploads/duplicate/thumb_Bhooth-bangla-(2026)-hindi-movie.jpg",
        streamUrl: "https://streamimdb.ru/embed/movie/tt29540862",
        releaseDate: "2026-04-10",
        description: "A thrilling upcoming cinematic blend of horror and comedy featuring high-voltage laughter, suspense, and unexpected supernatural twists."
    },
     {
        id: "dhurandhar-therevenge-2026",
        title: "Dhurandhar: The Revenge",
        type: "movie",
        genre: "Thriller / Spy",
        industry: "bollywood", // Correctly maps to Bollywood Hits row
        rating: "8.3",
        poster: "https://m.media-amazon.com/images/M/MV5BNDhjNThiMjQtNTc0ZS00MjAxLTgyODItNDFkZjI5YjU0MDJhXkEyXkFqcGc@._V1_.jpg",
        streamUrl: "https://streamimdb.ru/embed/movie/tt39139925",
        releaseDate: "2026-03-19",
        description: "Jaskirat Singh Rangi descends deeper into his alias as Hamza Ali Mazari, rising through Karachi's criminal hierarchy to claim the feared title "Sher-e-Baloch" while balancing loyalty, betrayal, and survival in a ruthless underworld.."
    },
    {
        id: "bastards-of-bollywood",
        title: "The Ba***ds of Bollywood",
        type: "series",
        genre: "Drama / Crime Thriller",
        industry: "series", // Correctly maps to Must-Watch Web Series row
        rating: "8.4",
        poster: "https://m.media-amazon.com/images/M/MV5BNzZiOTY5ZmYtYjZhYi00M2JjLTg3OTctMjM1OTBiY2ZkM2YwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        streamUrl: "https://streamimdb.ru/embed/tv/tt34683290",
        releaseDate: "2026-05-15",
        description: "Dive deep into a captivating, gritty fictionalization exploring the untold high-stakes underbelly of modern entertainment, power structures, and ambition."
    }
];
