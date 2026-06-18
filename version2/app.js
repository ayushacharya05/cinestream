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
        poster: "https://filmyzilla40.com/site_uploads/duplicate/thumb_Bhooth-bangla-(2026)-hindi-movie.jpg",
        streamUrl: "https://streamimdb.ru/embed/movie/tt29540862",
        releaseDate: "2026-04-10",
        description: "A thrilling upcoming cinematic blend of horror and comedy featuring high-voltage laughter, suspense, and unexpected supernatural twists."
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
    
 /**hollywood*/

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

     /**series*/
    {
        id: "bastards-of-bollywood",
        title: "The Ba***ds of Bollywood",
        type: "series",
        genre: "Drama / Crime Thriller",
        industry: "series", // Maps to Must-Watch Web Series row
        rating: "8.4",
        poster: "https://m.media-amazon.com/images/M/MV5BNzZiOTY5ZmYtYjZhYi00M2JjLTg3OTctMjM1OTBiY2ZkM2YwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        streamUrl: "https://streamimdb.ru/embed/tv/tt34683290",
        releaseDate: "2026-05-15",
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
    elementPointer.classList.add('active');

    const navbarOffset = document.getElementById('app-navigation').offsetHeight + 20;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

function setupSearchEngineListener() {
    const searchInput = document.getElementById('live-search');
    if(!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query === '') {
            renderMediaGridCollections(contentDatabase);
            return;
        }
        const filtered = contentDatabase.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.genre.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );
        renderMediaGridCollections(filtered);
    });
}

function resetFilters(e) {
    e.preventDefault();
    const searchInput = document.getElementById('live-search');
    if(searchInput) searchInput.value = '';
    renderMediaGridCollections(contentDatabase);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    const homeTab = document.querySelectorAll('.tab-btn')[0];
    if(homeTab) homeTab.classList.add('active');
}
