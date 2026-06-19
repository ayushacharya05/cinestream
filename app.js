/**
 * CineStream Production CMS Database File
 * * INSTRUCTIONS TO ADD NEW CONTENT:
 * 1. Copy an entire object block (from { down to },).
 * 2. Paste it inside the contentDatabase array.
 * 3. Update the properties. Ensure 'releaseDate' uses the YYYY-MM-DD format 
 * so the engine can automatically select the newest titles for the header slides.
 */

const contentDatabase = [
    /**bollywood*/
    {
        id: "bhooth-bangla-2026",
        title: "Bhooth Bangla (2026)",
        type: "movie",
        genre: "Horror / Comedy",
        industry: "bollywood", // Maps to Bollywood Hits row
        rating: "7.9",
        poster: "https://m.media-amazon.com/images/M/MV5BN2Y3NjRhYmMtNWVjMy00ZmE1LWJkNGYtNDY3Y2I3NjkzOGE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        streamUrl: "https://streamimdb.ru/embed/movie/tt29540862",
        releaseDate: "2026-04-10",
        description: "A thrilling upcoming cinematic blend of horror and comedy featuring high-voltage laughter, suspense, and unexpected supernatural twists."
    },
    {
        id: "Maa-Behen",
        title: "Maa Behen",
        type: "movie",
        genre: "Thriller/Comedy",
        industry: "bollywood", // Maps to Bollywood Hits row
        rating: "5.5",
        poster: "https://m.media-amazon.com/images/M/MV5BZGZjMGRjN2QtZWM4Ni00NjVjLWFjZjMtMmJmNjg2ZjQ1ZmZmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        streamUrl: "https://streamimdb.ru/embed/movie/tt33538438",
        releaseDate: "2026-06-04",
        description: "Rekha and her daughters Jaya and Sushma, controversial figures in their conservative neighborhood, discover a dead body in their kitchen. The struggling, squabbling mother-daughter trio must work together to cover up the crime."
    },
    {
        id: "dhurandhar-therevenge-2026",
        title: "Dhurandhar: The Revenge",
        type: "movie",
        genre: "Thriller/Spy",
        industry: "bollywood", // Maps to Bollywood Hits row
        rating: "8.3",
        poster: "https://m.media-amazon.com/images/M/MV5BNDhjNThiMjQtNTc0ZS00MjAxLTgyODItNDFkZjI5YjU0MDJhXkEyXkFqcGc@._V1_.jpg",
        streamUrl: "https://streamimdb.ru/embed/movie/tt39139925",
        releaseDate: "2026-03-19",
        description: "Jaskirat Singh Rangi descends deeper into his alias as Hamza Ali Mazari, rising through Karachi's criminal hierarchy to claim the feared title \"Sher-e-Baloch\" while balancing loyalty, betrayal, and survival in a ruthless underworld."
    },
    {
        id: "dhurandhar",
        title: "Dhurandhar",
        type: "movie",
        genre: "Thriller/Spy",
        industry: "bollywood", // Maps to Bollywood Hits row
        rating: "8.3",
        poster: "https://m.media-amazon.com/images/M/MV5BMzJhMzQ0MGItMWIxOC00NzkwLWJkNDktYjgyZGMwN2U2ZDEwXkEyXkFqcGc@._V1_.jpg",
        streamUrl: "https://streamimdb.ru/embed/movie/tt39139925",
        releaseDate: "2025-12-05",
        description: "A mysterious traveler slips into the heart of Karachi's underbelly and rises through its ranks with lethal precision, only to tear the notorious ISI-Underworld nexus apart from within."
    },
        {
        id: "O-Romeo",
        title: "O' Romeo",
        type: "movie",
        genre: "Thriller",
        industry: "bollywood", // Maps to Bollywood Hits row
        rating: "5.2",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtlBBJrvGWNZ81aGY0g6KQPa9_qPyAnemfjTlp621a4g&s=10",
        streamUrl: "https://streamimdb.ru/embed/movie/tt31969779",
        releaseDate: "2025-12-05",
        description: "In post-independence Mumbai, the underworld rises amidst a changing city. This gritty tale explores the criminal landscape of a bygone era, weaving through the streets and shadows of India's bustling metropolis."
    },
    {
        id: "Raid 2",
        title: "Raid 2",
        type: "movie",
        genre: "Thriller",
        industry: "bollywood", // Maps to Bollywood Hits row
        rating: "6.2",
        poster: "https://m.media-amazon.com/images/M/MV5BOTI4YWMzOGYtODkzYS00NTEyLWFmMzYtMzJkOGZmOWZlNThhXkEyXkFqcGc@._V1_.jpg",
        streamUrl: "https://streamimdb.ru/embed/movie/tt28089700",
        releaseDate: "2025-05-01",
        description: "In 1989 Rajasthan, IPS officer Patnaik raids a palace but fails. After requesting a bribe, he's transferred to Bhoj, where he investigates Dada Bhai, a respected local figure. "
    },
    {
        id: "saiyara",
        title: "Saiyaara",
        type: "movie",
        genre: "Romance",
        industry: "bollywood", // Maps to Bollywood Hits row
        rating: "6.3",
        poster: "https://m.media-amazon.com/images/M/MV5BMTk2ZmFhYjctYWZiYy00N2IxLWEzMWItZGRiMDY4ZDQwZWFlXkEyXkFqcGc@._V1_.jpg",
        streamUrl: "https://streamimdb.ru/embed/movie/tt28037987",
        releaseDate: "2025-07-18",
        description: "Heartbroken after being ditched at the altar, Vaani meets angry, struggling musician Krish. Her poetry ignites his songs and their passionate love. But as fame rises, her fading memories threaten to erase everything."
    },
    {
        id: "Dhadak-2-2025",
        title: "Dhadak 2 2025",
        type: "movie",
        genre: "Romance",
        industry: "bollywood", // Maps to Bollywood Hits row
        rating: "6.8",
        poster: "https://m.media-amazon.com/images/M/MV5BY2EzN2UxMDItZTk2NC00NDcwLTliYjktNWI4ZWJjZTQ1ZTg2XkEyXkFqcGc@._V1_.jpg",
        streamUrl: "https://streamimdb.ru/embed/movie/tt13451410",
        releaseDate: "2025-08-01",
        description: "Targeted for his caste, a first-year student at an elite college fights off vicious bullies and lethal threats to protect his dignity and forbidden love."
    },
    {
        id: "Jolly-LLB-3",
        title: "Jolly LLB 3",
        type: "movie",
        genre: "Comedy",
        industry: "bollywood", // Maps to Bollywood Hits row
        rating: "6.4",
        poster: "https://m.media-amazon.com/images/M/MV5BMDQ3OTFkNzUtYjM4OC00ZGFlLTliZTEtMTNiY2U2YzVkNDg3XkEyXkFqcGc@._V1_.jpg",
        streamUrl: "https://streamimdb.ru/embed/movie/tt27996020",
        releaseDate: "2025-09-19",
        description: "Smart-alec Jolly Mishra and jugadu Jolly Tyagi clash in Judge Tripathi's court with witty banter, wild twists, and heartfelt chaos in this ultimate courtroom comedy."
    },
    {
        id: "Tere-Ishk-Mein",
        title: "Tere Ishk Mein",
        type: "movie",
        genre: "Romance",
        industry: "bollywood", // Maps to Bollywood Hits row
        rating: "6.2",
        poster: "https://m.media-amazon.com/images/M/MV5BODM3MGUxMjEtMzNmYi00ODYzLTk2OTYtNzcxZmE5NmRmMjkyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        streamUrl: "https://streamimdb.ru/embed/movie/tt28142095",
        releaseDate: "2025-11-28",
        description: "Shankar and Mukti's intense love story unfolds against the backdrop of Benaras, exploring surrender and transformation through an all-consuming romance that heals, hurts and changes them."
    },
    /**hollywood*/
    {
        id: "your-faault",
        title: "Your Fault: London",
        type: "movie",
        genre: "Drama",
        industry: "hollywood", // Maps to hollywood Hits row
        rating: "6.5",
        poster: "https://m.media-amazon.com/images/M/MV5BNzI2YmMxZWItNjlhOS00ODNmLWEzYjQtYWIyNjc0ZTQwOTZlXkEyXkFqcGc@._V1_.jpg",
        streamUrl: "https://streamimdb.ru/embed/movie/tt36958376",
        releaseDate: "2026-07-17",
        description: "A forbidden love story between 18-year-old Noah and stepbrother Nick faces challenges as they pursue different paths - him in business, her at Oxford - while dealing with new relationships and secrets."
    },
    {
        id: "maternal-instinct",
        title: "Maternal Instinct",
        type: "movie",
        genre: "Crime/Documentary",
        industry: "hollywood", // Maps to hollywood Hits row
        rating: "7.3",
        poster: "https://image.pmgstatic.com/cache/resized/w663/files/images/film/posters/171/349/171349082_abhd78.jpg",
        streamUrl: "https://streamimdb.ru/embed/movie/tt42863533",
        releaseDate: "2026-05-12",
        description: "When a Texas state trooper pulled over a woman driving erratically on the highway in 2020, she claimed she had just given birth, but her story didn't add up."
    },
    {
        id: "shelter",
        title: "Shelter",
        type: "movie",
        genre: "Thriler",
        industry: "hollywood", // Maps to hollywood Hits row
        rating: "6.2",
        poster: "https://m.media-amazon.com/images/M/MV5BMzI2ODY3MzQtYzllNy00YWM1LWExZTgtOGIwNjk2MmE2MmY2XkEyXkFqcGc@._V1_.jpg",
        streamUrl: "https://streamimdb.ru/embed/movie/tt32357218",
        releaseDate: "2026-01-30",
        description: "A reclusive former government assassin finds his forced isolation shattered when a stranded supply girl triggers a lethal tracking system, forcing him to defend her against his old handler's relentless execution squads."
    },
    {
        id: "Over-Your-Dead-Body",
        title: "Over Your Dead Body",
        type: "movie",
        genre: "Thriler",
        industry: "hollywood", // Maps to hollywood Hits row
        rating: "6.2",
        poster: "https://m.media-amazon.com/images/M/MV5BMWU2M2YyNTMtZGM4ZC00MDcwLWI3NmItZWM0YjIyOTEyNDZhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        streamUrl: "https://streamimdb.ru/embed/movie/tt34685692",
        releaseDate: "2026-04-24",
        description: "A dysfunctional married couple retreats to a secluded cabin to repair their relationship, but each secretly plots to murder the other."
    },
    {
        id: "disclosure-day",
        title: "Disclosure Day",
        type: "movie",
        genre: "Sci-Fi Epic",
        industry: "hollywood", // Maps to hollywood Hits row
        rating: "6.8",
        poster: "https://m.media-amazon.com/images/M/MV5BMTgwNDI1ZjctYWNmMS00MTJhLTg1ZWItMzI1Yjk5NjZkYWFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        streamUrl: "https://streamimdb.ru/embed/movie/tt15047880",
        releaseDate: "2026-06-12",
        description: "If you found out we weren't alone, if someone showed you, proved it to you, would that frighten you?"
    },
    {
        id: "iam-frankelda",
        title: "I Am Frankelda",
        type: "movie",
        genre: "animation/spanish",
        industry: "hollywood", // Maps to hollywood Hits row
        rating: "7.0",
        poster: "https://m.media-amazon.com/images/M/MV5BNDc3OTYxOTQtYzNkMy00YzQ5LWJlM2MtZDcwYTliZThkMWM0XkEyXkFqcGc@._V1_.jpg",
        streamUrl: "https://streamimdb.ru/embed/movie/tt36639986",
        releaseDate: "2026-06-12",
        description: "Frankelda, a determined 19th-century Mexican writer, journeys into her subconscious to face the monsters she's written about. Guided by a tormented prince, she must restore the balance between fiction and reality before it's too late."
    },
    /**series*/
    {
        id: "A-Knight-of-the-Seven-Kingdoms",
        title: "A Knight of the Seven Kingdoms",
        type: "series",
        genre: "Epic/Dark Fantasy",
        industry: "series", 
        rating: "8.6",
        poster: "https://m.media-amazon.com/images/M/MV5BYzg4M2U3YWMtMWY4MS00MzFkLTk2ZWQtOThiOGYxZDEyMGQ2XkEyXkFqcGc@._V1_.jpg",
        streamUrl: "https://streamimdb.ru/embed/tv/tt27497448",
        releaseDate: "2026-04-17",
        description: "A century before the events of 'Game of Thrones', Ser Duncan the Tall, and his squire, Egg, wander through Westeros while the Targaryen dynasty rule the Iron Throne."
    },
    {
        id: "The-Boys",
        title: "The Boys Season 1-5",
        type: "series",
        genre: "Satire/Dark Comedy",
        industry: "series", 
        rating: "8.5",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhlx0wpKRG9fPPwRh9rXEV2Bw71HNMJHi5q3Q5q3iOxj09T1AxeWRwcg&s=10",
        streamUrl: "https://streamimdb.ru/embed/tv/tt1190634",
        releaseDate: "2026-04-08",
        description: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers."
    },
    {
        id: "Matka-King",
        title: "Matka King",
        type: "series",
        genre: "Drama",
        industry: "series", 
        rating: "7.2",
        poster: "https://m.media-amazon.com/images/M/MV5BNjg3ZmExNjctNGI3Yi00MWRlLWExYjMtODg5ZmE1Yjc4MTU2XkEyXkFqcGc@._V1_.jpg",
        streamUrl: "https://streamimdb.ru/embed/tv/tt16997004",
        releaseDate: "2026-04-17",
        description: "An enterprising cotton trader in Mumbai starts a new gambling game called Matka, taking the city by storm and democratizing a terrain previously reserved for the rich and elite."
    },
    {
        id: "gullak",
        title: "Gullak Season 1-5",
        type: "series",
        genre: "Family/Comedy/Drama",
        industry: "series", 
        rating: "9.1",
        poster: "https://i.pinimg.com/736x/26/33/50/263350b944e1b0c5151cc9cb95b10b47.jpg",
        streamUrl: "https://streamimdb.ru/embed/tv/tt10530900",
        releaseDate: "2019-05-19",
        description: "Set in quaint by-lanes in the heart of India, Gullak is a collection of disarming and relatable tales of the Mishra family."
    },
    {
        id: "panchayat",
        title: "Panchayat Season 1-4",
        type: "series",
        genre: "Satire/Drama/Comedy",
        industry: "series", 
        rating: "9.0",
        poster: "https://m.media-amazon.com/images/M/MV5BNjMwYWMxNjYtY2I2NC00OWE0LTg4MmQtMmI5ZGI2NzU4ODhiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        streamUrl: "https://streamimdb.ru/embed/tv/tt12004706",
        releaseDate: "2020-06-24",
        description: "A comedy-drama, which captures the journey of an engineering graduate Abhishek, who for lack of a better job option joins as secretary of a Panchayat office in a remote village of Uttar Pradesh."
    },
    {
        id: "taaza-khabar",
        title: "Taaza Khabar",
        type: "series",
        genre: "Thriller",
        industry: "series", 
        rating: "8.0",
        poster: "https://m.media-amazon.com/images/M/MV5BNjAzMDEzZmUtYjgzMy00NTYxLWJlODItYTMyZGI4YzdmZGY4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        streamUrl: "https://streamimdb.ru/embed/tv/tt22014226",
        releaseDate: "2023-01-06",
        description: "A Sanitation worker, how he stumbles upon magical powers which leads to a riveting new ride for the man, and how it stirs his humble life."
    },
    {
        id: "farzi",
        title: "Farzi",
        type: "series",
        genre: "Thriller",
        industry: "series", 
        rating: "8.4",
        poster: "https://m.media-amazon.com/images/M/MV5BNDY2OWMxNzgtZGQ4Ny00ODI3LTk3MTAtYjM4N2U4ZGI3ZGY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        streamUrl: "https://streamimdb.ru/embed/tv/tt15477488",
        releaseDate: "2023-02-05",
        description: "Dive deep into a captivating, gritty fictionalization exploring the untold high-stakes underbelly of modern entertainment, power structures, and ambition."
    }
];

// --- APP RUNTIME INTERACTIVE FUNCTIONAL ENGINES ---

let currentActiveSlideIndex = 0;
let dynamicActiveSlides = [];
let sliderLoopInterval;

document.addEventListener("DOMContentLoaded", () => {
    initializeStreamingHub();

    // Premium Navigation Header Background Transparency Toggle Effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('app-navigation');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

function initializeStreamingHub() {
    if (typeof contentDatabase === 'undefined' || contentDatabase.length === 0) {
        console.error("Database parsing failed. Check your data structure alignment.");
        return;
    }

    // Sort contents chronologically to automatically load the newest releases onto the slider
    const sortedByDate = [...contentDatabase].sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    dynamicActiveSlides = sortedByDate.slice(0, 3);

    renderHeaderSliderCarousel();
    renderMediaGridCollections(contentDatabase);
    setupSearchEngineListener();
    startAutoSliderLoop();
}

function renderHeaderSliderCarousel() {
    const track = document.getElementById('main-slider-track');
    const dotsBox = document.getElementById('slider-dots-box');
    if(!track || !dotsBox) return;
    
    track.innerHTML = '';
    dotsBox.innerHTML = '';
    track.style.width = `${dynamicActiveSlides.length * 100}%`;

    dynamicActiveSlides.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.className = 'hero-slide';
        slide.style.width = `${100 / dynamicActiveSlides.length}%`;
        slide.style.background = `url('${item.poster}')`;
        slide.innerHTML = `
            <div class="hero-inner">
                <div class="badge-row">
                    <span class="spotlight-badge">FEATURED TITLES</span>
                    <span class="genre-badge">${item.genre}</span>
                </div>
                <h1 class="hero-title">${item.title}</h1>
                <div class="hero-meta">
                    <span class="rating-star">★ ${item.rating} IMDb</span>
                    <span>•</span>
                    <span>Released: ${item.releaseDate}</span>
                </div>
                <p class="hero-description">${item.description || ''}</p>
                <button class="btn-stream" onclick="openDetailsPanel('${item.id}')">
                    View Details
                </button>
            </div>
        `;
        track.appendChild(slide);

        const dot = document.createElement('span');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.onclick = () => {
            clearInterval(sliderLoopInterval);
            switchSlide(index);
            startAutoSliderLoop();
        };
        dotsBox.appendChild(dot);
    });
}

function switchSlide(index) {
    if (dynamicActiveSlides.length <= 1) return;
    currentActiveSlideIndex = index;
    const track = document.getElementById('main-slider-track');
    const movementPercent = index * (100 / dynamicActiveSlides.length);
    if(track) track.style.transform = `translateX(-${movementPercent}%)`;
    
    document.querySelectorAll('#slider-dots-box .dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function startAutoSliderLoop() {
    if (dynamicActiveSlides.length <= 1) return;
    sliderLoopInterval = setInterval(() => {
        let nextSlide = (currentActiveSlideIndex + 1) % dynamicActiveSlides.length;
        switchSlide(nextSlide);
    }, 6000);
}

function renderMediaGridCollections(dataset) {
    const bollywoodGrid = document.getElementById('bollywood-render-grid');
    const hollywoodGrid = document.getElementById('hollywood-render-grid');
    const seriesGrid = document.getElementById('series-render-grid');

    if(bollywoodGrid) bollywoodGrid.innerHTML = ''; 
    if(hollywoodGrid) hollywoodGrid.innerHTML = '';
    if(seriesGrid) seriesGrid.innerHTML = '';

    let counts = { bollywood: 0, hollywood: 0, series: 0 };

    dataset.forEach(item => {
        const card = document.createElement('div');
        card.className = 'media-card';
        // Store metadata directly inside DOM datasets for seamless search lookup extraction
        card.dataset.title = item.title.toLowerCase();
        card.dataset.genre = item.genre.toLowerCase();
        card.dataset.desc = (item.description || '').toLowerCase();
        
        card.innerHTML = `
            <div class="poster-wrapper">
                <img src="${item.poster}" alt="${item.title}" loading="lazy">
                <div class="card-dark-overlay">
                    <div class="info-circle-btn">View Details</div>
                </div>
            </div>
            <div class="card-body">
                <div class="card-info-header">
                    <span class="type-tag">${item.type}</span>
                    <span class="card-rating">★ ${item.rating}</span>
                </div>
                <h3 class="card-title">${item.title}</h3>
                <span class="card-genre">${item.genre}</span>
            </div>
        `;
        
        card.addEventListener('click', () => openDetailsPanel(item.id));

        if (item.industry === 'bollywood' && bollywoodGrid) {
            bollywoodGrid.appendChild(card);
            counts.bollywood++;
        } else if (item.industry === 'hollywood' && hollywoodGrid) {
            hollywoodGrid.appendChild(card);
            counts.hollywood++;
        } else if (item.industry === 'series' && seriesGrid) {
            seriesGrid.appendChild(card);
            counts.series++;
        }
    });

    if(counts.bollywood === 0 && bollywoodGrid) bollywoodGrid.innerHTML = '<div class="empty-placeholder-msg">More Bollywood additions coming soon.</div>';
    if(counts.hollywood === 0 && hollywoodGrid) hollywoodGrid.innerHTML = '<div class="empty-placeholder-msg">More Hollywood additions coming soon.</div>';
    if(counts.series === 0 && seriesGrid) seriesGrid.innerHTML = '<div class="empty-placeholder-msg">More Web Series additions coming soon.</div>';
}

/* Modal Interface Intercept and Data Mapping Logic */
function openDetailsPanel(id) {
    const item = contentDatabase.find(m => m.id === id);
    if (!item) return;

    document.getElementById('panel-title-target').innerText = item.title;
    document.getElementById('panel-rating-target').innerText = `★ ${item.rating}`;
    document.getElementById('panel-type-target').innerText = item.type.toUpperCase();
    document.getElementById('panel-genre-target').innerText = item.genre;
    document.getElementById('panel-desc-target').innerText = item.description || '';
    document.getElementById('panel-banner-target').style.background = `url('${item.poster}')`;

    const playBtn = document.getElementById('panel-play-trigger');
    playBtn.onclick = () => openCinemaScreen(item.streamUrl);

    const panel = document.getElementById('global-details-panel');
    if(panel) {
        panel.style.display = 'flex';
        setTimeout(() => panel.classList.add('active'), 10);
    }
}

function closeDetailsPanel() {
    const panel = document.getElementById('global-details-panel');
    if(panel) {
        panel.classList.remove('active');
        setTimeout(() => panel.style.display = 'none', 400);
    }
}

function openCinemaScreen(url) {
    const frame = document.getElementById('cinema-frame-element');
    if(frame) frame.src = url;
    const player = document.getElementById('global-player-overlay');
    if(player) player.classList.add('active');
}

function closeCinemaScreen() {
    const frame = document.getElementById('cinema-frame-element');
    if(frame) frame.src = ''; 
    const player = document.getElementById('global-player-overlay');
    if(player) player.classList.remove('active');
}

/* UI Navigation Rail Controls */
function scrollCarousel(gridId, direction) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    const scrollAmount = grid.offsetWidth * 0.75;
    grid.scrollBy({
        left: scrollAmount * direction,
        behavior: 'smooth'
    });
}

function scrollToSection(targetId, elementPointer) {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    if (elementPointer) {
        elementPointer.classList.add('active');
    } else {
        // Find corresponding navigation button by section target if scrolled programmatically
        const matchBtn = Array.from(document.querySelectorAll('.tab-btn')).find(btn => {
            return btn.getAttribute('onclick').includes(targetId);
        });
        if(matchBtn) matchBtn.classList.add('active');
    }

    const navbarOffset = document.getElementById('app-navigation').offsetHeight + 20;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

/**
 * Enhanced Search Engine Controller
 * Filters titles instantly, shows ONLY matching movies, and hides non-matching elements entirely.
 */
function setupSearchEngineListener() {
    const searchInput = document.getElementById('live-search');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const allSections = document.querySelectorAll('section.row-container');
        
        if (query === '') {
            // Restore everything back to normal grid parameters
            allSections.forEach(section => {
                section.style.display = 'block'; // Show all row containers
                const cards = section.querySelectorAll('.media-card');
                cards.forEach(card => {
                    card.style.display = 'block'; // Show all cards
                    card.style.transform = '';
                    card.style.borderColor = 'var(--border-subtle)';
                });
            });
            
            // Reset horizontal track scrolling back to start
            document.querySelectorAll('.movies-grid').forEach(grid => grid.scrollLeft = 0);

            // Default select the Home tab
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            const homeTab = document.querySelectorAll('.tab-btn')[0];
            if(homeTab) homeTab.classList.add('active');
            return;
        }

        let firstMatchedSectionId = null;

        allSections.forEach(section => {
            const cards = section.querySelectorAll('.media-card');
            let sectionHasMatch = false;

            cards.forEach(card => {
                const title = card.dataset.title || '';
                const genre = card.dataset.genre || '';
                const desc = card.dataset.desc || '';

                if (title.includes(query) || genre.includes(query) || desc.includes(query)) {
                    card.style.display = 'block'; // Keep match visible
                    card.style.borderColor = 'var(--accent-primary)';
                    sectionHasMatch = true;
                } else {
                    card.style.display = 'none'; // Hide non-matching movie entirely
                }
            });

            // If a category row has at least one matching movie, keep it visible
            if (sectionHasMatch) {
                section.style.display = 'block';
                
                // Instantly snap the layout track back to 0 so the active movie is right in front of the screen
                const gridElement = section.querySelector('.movies-grid');
                if (gridElement) gridElement.scrollLeft = 0;

                if (!firstMatchedSectionId) {
                    firstMatchedSectionId = section.id;
                }
            } else {
                section.style.display = 'none'; // Hide entire category if no matches exist
            }
        });

        // Jump straight down to the matched row
        if (firstMatchedSectionId) {
            scrollToSection(firstMatchedSectionId, null);
        }
    });
}

function resetFilters(e) {
    e.preventDefault();
    const searchInput = document.getElementById('live-search');
    if (searchInput) searchInput.value = '';
    
    const allSections = document.querySelectorAll('section.row-container');
    allSections.forEach(section => {
        section.style.display = 'block';
        const cards = section.querySelectorAll('.media-card');
        cards.forEach(card => {
            card.style.display = 'block';
            card.style.transform = '';
            card.style.borderColor = 'var(--border-subtle)';
        });
        const gridElement = section.querySelector('.movies-grid');
        if (gridElement) gridElement.scrollLeft = 0;
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    const homeTab = document.querySelectorAll('.tab-btn')[0];
    if(homeTab) homeTab.classList.add('active');
}
