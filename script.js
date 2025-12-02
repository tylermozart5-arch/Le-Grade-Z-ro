// Définition des produits enrichie (Mise à jour pour inclure 12 genres distincts pour les filtres)
const PRODUCTS = [
    // FILMS
    {
        id: 4,
        title: "Opération Nova (4K)",
        category: "films", 
        price: 9500,
        genre: "Action",
        year: 2022,
        duration: "1h45min",
        synopsis: "Un commando d'élite est envoyé en territoire ennemi pour désactiver une arme capable de geler le temps.",
        image_url: "https://i.imgur.com/ff4500.png",
        isOffer: false
    },
    {
        id: 7,
        title: "Terre promise",
        category: "films",
        price: 6400, // -20% de 8000
        originalPrice: 8000,
        genre: "Policier", 
        year: 2023,
        duration: "2h05min",
        synopsis: "Un détective enquête sur des disparitions mystérieuses dans une petite ville isolée.",
        image_url: "https://i.imgur.com/f08080.png", 
        isOffer: true
    },
    {
        id: 9, 
        title: "Les Larmes du passé",
        category: "films",
        price: 7500,
        genre: "Romance", 
        year: 2024,
        duration: "1h50min",
        synopsis: "Une histoire d'amour déchirante entre deux âmes séparées par le destin et le temps.",
        image_url: "https://i.imgur.com/f0f8ff.png", 
        isOffer: false
    },
    {
        id: 10, 
        title: "La Vallée oubliée",
        category: "films",
        price: 8800,
        genre: "Aventure", 
        year: 2021,
        duration: "2h10min",
        synopsis: "Une expédition périlleuse pour découvrir une civilisation perdue au cœur d'une jungle inexplorée.",
        image_url: "https://i.imgur.com/8f8f8f.png", 
        isOffer: false
    },
    {
        id: 13, 
        title: "L'Ombre du silence",
        category: "films",
        price: 9900,
        genre: "Horreur", 
        year: 2023,
        duration: "1h30min",
        synopsis: "Un groupe d'amis est piégé dans un asile abandonné avec une présence terrifiante.",
        image_url: "https://i.imgur.com/2c2c2c.png", 
        isOffer: false
    },
    {
        id: 14, 
        title: "Le Dernier Rire",
        category: "films",
        price: 5500,
        genre: "Comédie", 
        year: 2024,
        duration: "1h25min",
        synopsis: "Un homme maladroit se retrouve accidentellement au centre d'un complot international.",
        image_url: "https://i.imgur.com/8b0000.png", 
        isOffer: true
    },
    {
        id: 15, 
        title: "Secrets de l'espace",
        category: "films",
        price: 10500,
        genre: "Science-Fiction", 
        year: 2023,
        duration: "2h00min",
        synopsis: "Un voyage épique vers les confins de l'univers pour trouver une nouvelle planète habitable.",
        image_url: "https://i.imgur.com/6a5acd.png",
        isOffer: false
    },
    {
        id: 16, 
        title: "Bataille de l'Atlantique",
        category: "films",
        price: 7200,
        genre: "Guerre", 
        year: 2020,
        duration: "2h15min",
        synopsis: "L'histoire vraie d'un sous-marin luttant pour survivre lors de la Seconde Guerre mondiale.",
        image_url: "https://i.imgur.com/20b2aa.png",
        isOffer: false
    },
    {
        id: 17, 
        title: "Le Chant du Titan",
        category: "films",
        price: 9000,
        genre: "Fantaisie", 
        year: 2022,
        duration: "2h30min",
        synopsis: "Un jeune sorcier doit affronter un dragon ancestral pour sauver son royaume.",
        image_url: "https://i.imgur.com/4169e1.png",
        isOffer: false
    },
    {
        id: 25, 
        title: "La Face cachée du monde",
        category: "films",
        price: 6800,
        genre: "Documentaire", 
        year: 2024,
        duration: "1h55min",
        synopsis: "Un documentaire choc sur l'impact de la technologie sur les cultures indigènes.",
        image_url: "https://i.imgur.com/008000.png",
        isOffer: false
    },
    {
        id: 26, 
        title: "Le Royaume de Solaria",
        category: "films",
        price: 7700,
        genre: "Animation", 
        year: 2023,
        duration: "1h30min",
        synopsis: "Un film d'animation pour enfants sur une princesse qui découvre la magie du soleil.",
        image_url: "https://i.imgur.com/0000ff.png",
        isOffer: false
    },
    {
        id: 27, 
        title: "Le Poids de l'héritage",
        category: "films",
        price: 8400,
        genre: "Drame", 
        year: 2024,
        duration: "2h00min",
        synopsis: "Le déchirement d'une famille confrontée à la maladie et aux secrets du passé.",
        image_url: "https://i.imgur.com/f08080.png",
        isOffer: false
    },
    
    // SÉRIES
    {
        id: 1,
        title: "The Anomalie - Saison 1 (HD)",
        category: "series", 
        price: 10400, 
        originalPrice: 13000, 
        genre: "Science-Fiction", 
        year: 2024, 
        duration: "10 épisodes",
        synopsis: "Une faille temporelle s'ouvre au cœur de Paris, révélant des créatures et des technologies d'une autre époque.",
        image_url: "https://i.imgur.com/6a5acd.png",
        isOffer: true
    },
    {
        id: 6,
        title: "Série: Les Sentinelles",
        category: "series",
        price: 11000,
        genre: "Drame", 
        year: 2024,
        duration: "Saison 3",
        synopsis: "Un groupe de héros improbables défend le multivers contre une menace invisible.",
        image_url: "https://i.imgur.com/20b2aa.png",
        isOffer: false
    },
    {
        id: 11,
        title: "Série: Le Dernier Tournant",
        category: "series",
        price: 9900,
        genre: "Policier", 
        year: 2023,
        duration: "Saison 1",
        synopsis: "Un détective chevronné enquête sur une série de crimes parfaits dans les bas-fonds de la ville.",
        image_url: "https://i.imgur.com/4f4f4f.png", 
        isOffer: false
    },
    {
        id: 12,
        title: "Série: Murmures dans la Nuit",
        category: "series",
        price: 8900,
        genre: "Horreur", 
        year: 2022,
        duration: "Saison 2",
        synopsis: "Une famille emménage dans une vieille maison hantée par une entité maléfique.",
        image_url: "https://i.imgur.com/2c2c2c.png", 
        isOffer: false
    },
    {
        id: 18, 
        title: "Série: Les Vies Croisées",
        category: "series",
        price: 12000,
        genre: "Romance", 
        year: 2023,
        duration: "Saison 4",
        synopsis: "Les destins entremêlés de plusieurs couples à travers les décennies.",
        image_url: "https://i.imgur.com/f0f8ff.png",
        isOffer: false
    },
    {
        id: 19, 
        title: "Série: Le Trésor des Îles",
        category: "series",
        price: 11500,
        genre: "Aventure", 
        year: 2024,
        duration: "Saison 1",
        synopsis: "Une chasse au trésor mouvementée à travers l'archipel du Pacifique.",
        image_url: "https://i.imgur.com/8f8f8f.png",
        isOffer: false
    },
    {
        id: 20, 
        title: "Série: Les Chroniques du Royaume",
        category: "series",
        price: 13000,
        genre: "Fantaisie", 
        year: 2023,
        duration: "Saison 2",
        synopsis: "Des batailles épiques, des créatures mythiques et des quêtes pour le trône.",
        image_url: "https://i.imgur.com/4169e1.png",
        isOffer: false
    },
    {
        id: 21, 
        title: "Série: Histoires Vraies",
        category: "series",
        price: 8500,
        genre: "Documentaire", 
        year: 2022,
        duration: "Saison 1",
        synopsis: "Série explorant des événements historiques méconnus avec des archives et témoignages.",
        image_url: "https://i.imgur.com/008000.png",
        isOffer: false
    },
    {
        id: 22, 
        title: "Série: Le Clan des Fous",
        category: "series",
        price: 7900,
        genre: "Comédie", 
        year: 2024,
        duration: "Saison 3",
        synopsis: "Les mésaventures hilarantes d'une famille excentrique à la recherche de la normalité.",
        image_url: "https://i.imgur.com/4f4f4f.png",
        isOffer: false
    },
    {
        id: 23, 
        title: "Série: Les Cadets de l'Air",
        category: "series",
        price: 10500,
        genre: "Action", 
        year: 2023,
        duration: "Saison 2",
        synopsis: "Jeunes pilotes d'élite affrontant des menaces aériennes dans le ciel du futur.",
        image_url: "https://i.imgur.com/ff4500.png",
        isOffer: false
    },
    {
        id: 24, 
        title: "Série: Héros de papier",
        category: "series",
        price: 9200,
        genre: "Animation", 
        year: 2024,
        duration: "Saison 1",
        synopsis: "Un groupe de personnages de dessins animés prennent vie dans le monde réel.",
        image_url: "https://i.imgur.com/f0f8ff.png",
        isOffer: false
    },
    {
        id: 28, 
        title: "Série: La Ligne de Front",
        category: "series",
        price: 11800,
        genre: "Guerre", 
        year: 2021,
        duration: "Saison 1",
        synopsis: "Le quotidien d'une unité de soldats pendant la guerre froide.",
        image_url: "https://i.imgur.com/20b2aa.png",
        isOffer: false
    },
    
    // BD / COMICS
    {
        id: 2,
        title: "BD: Le Dernier Gardien",
        category: "bd-comics", 
        price: 6500, 
        genre: "Fantaisie", 
        year: 2023, 
        pages: 80,
        synopsis: "Le dernier gardien de la Bibliothèque universelle doit protéger le savoir contre les Pillards du Néant.",
        image_url: "https://i.imgur.com/4169e1.png",
        isOffer: false
    },
    {
        id: 5,
        title: "Comics: Chroniques de l'Ombre",
        category: "bd-comics",
        price: 3920, // -20% de 4900
        originalPrice: 4900,
        genre: "Fantaisie", 
        year: 2023,
        pages: 45,
        synopsis: "Plongez dans un monde où la magie noire menace d'engloutir les royaumes.",
        image_url: "https://i.imgur.com/8b0000.png",
        isOffer: true
    },
    {
        id: 29, 
        title: "BD: Les Machines oubliées",
        category: "bd-comics",
        price: 7200,
        genre: "Science-Fiction", 
        year: 2024,
        pages: 60,
        synopsis: "Un voyage dans un futur post-apocalyptique dominé par l'IA.",
        image_url: "https://i.imgur.com/ff4500.png",
        isOffer: false
    },
    {
        id: 30, 
        title: "Comics: Aube Écarlate",
        category: "bd-comics",
        price: 5900,
        genre: "Horreur", 
        year: 2022,
        pages: 55,
        synopsis: "Une créature démoniaque se réveille dans une petite ville.",
        image_url: "https://i.imgur.com/2c2c2c.png",
        isOffer: false
    },
    
    // JEUX VIDÉOS (Mise à jour pour inclure les plateformes spécifiques)
    {
        id: 3,
        title: "Jeu: Cyber-Racer 2077",
        category: "jeux-videos", 
        price: 7920, 
        originalPrice: 9900,
        genre: "Course", 
        year: 2024,
        platform: "PC", // CHANGÉ
        synopsis: "Course futuriste illégale dans les rues néon de Neo-Tokyo. Téléchargement direct après achat.",
        image_url: "https://i.imgur.com/008000.png",
        isOffer: true
    },
    {
        id: 8,
        title: "Jeu: Les Gardiens du Sanctuaire",
        category: "jeux-videos",
        price: 15500,
        genre: "RPG", 
        year: 2024,
        platform: "PS3", // CHANGÉ
        synopsis: "Un jeu de rôle épique dans un monde ouvert peuplé de monstres et de quêtes mystérieuses.",
        image_url: "https://i.imgur.com/0000ff.png", 
        isOffer: false
    },
    {
        id: 31, 
        title: "Jeu: L'Âge de la Magie",
        category: "jeux-videos",
        price: 4900,
        genre: "Stratégie", 
        year: 2023,
        platform: "Mobile Android", // NOUVEAU
        synopsis: "Jeu de stratégie au tour par tour. Disponible pour appareils mobiles Android.",
        image_url: "https://i.imgur.com/4f4f4f.png", 
        isOffer: false
    },
    {
        id: 32, 
        title: "Jeu: Fureur Céleste",
        category: "jeux-videos",
        price: 12500,
        genre: "Action", 
        year: 2022,
        platform: "PS2", // NOUVEAU
        synopsis: "Un beat'em up classique avec des graphismes remasterisés.",
        image_url: "https://i.imgur.com/8f8f8f.png", 
        isOffer: false
    },
    {
        id: 33, 
        title: "Jeu: Défi Ultra",
        category: "jeux-videos",
        price: 3500,
        genre: "Sport", 
        year: 2024,
        platform: "Mobile Android", // NOUVEAU
        synopsis: "Jeu de football rapide et amusant. Idéal pour les petits écrans.",
        image_url: "https://i.imgur.com/f0f8ff.png", 
        isOffer: false
    },
    {
        id: 34, 
        title: "Jeu: L'Héritage Interdit",
        category: "jeux-videos",
        price: 18000,
        genre: "Aventure", 
        year: 2024,
        platform: "PS3", // NOUVEAU
        synopsis: "Une aventure en monde ouvert avec des énigmes complexes.",
        image_url: "https://i.imgur.com/ff4500.png", 
        isOffer: false
    }
];

const TRANSACTION_FEE = 1000;
let cart = JSON.parse(localStorage.getItem('gradeZeroCart')) || [];
const CURRENCY_SYMBOL = "FCFA";
const WHATSAPP_NUMBER = "24162636600";

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const currentPageCategory = body.getAttribute('data-category'); 

    document.body.insertAdjacentHTML('beforeend', '<div id="toast-container"></div>');

    if (currentPageCategory) {
        initFilters(currentPageCategory); 
        filterAndRenderProducts(currentPageCategory); 
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('is-open'); 
        });
    }

    updateCartCount();

    if (document.body.classList.contains('cart-page')) {
        renderCartItems();
        attachCartListeners();
    }
});


// **********************************************
// FONCTIONS DE FILTRAGE
// **********************************************

function initFilters(category) {
    const genreFilter = document.getElementById('genre-filter');
    const yearFilter = document.getElementById('year-filter');
    const sortFilter = document.getElementById('sort-filter');
    const platformFilter = document.getElementById('platform-filter'); // NOUVEAU FILTRE PLATEFORME
    const searchInput = document.getElementById('search-input');
    const filterContainer = document.getElementById('filter-controls');

    const relevantProducts = PRODUCTS.filter(p => category === 'all' || p.category === category);
    
    // Récupère les genres, années et plateformes uniques
    let relevantGenres = new Set(relevantProducts.map(p => p.genre).filter(Boolean));
    let relevantYears = new Set(relevantProducts.map(p => p.year).filter(Boolean));
    let relevantPlatforms = new Set(relevantProducts.map(p => p.platform).filter(Boolean)); // NOUVEAU

    // Remplissage du filtre GENRE
    if (genreFilter) {
        genreFilter.innerHTML = '<option value="all">Tous les Genres</option>';
        Array.from(relevantGenres).sort().forEach(genre => {
            const option = document.createElement('option');
            option.value = genre;
            option.textContent = genre;
            genreFilter.appendChild(option);
        });
    }
    
    // Remplissage du filtre ANNÉE
    if (yearFilter) {
        yearFilter.innerHTML = '<option value="all">Toutes les Années</option>';
        Array.from(relevantYears).sort((a, b) => b - a).forEach(year => {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearFilter.appendChild(option);
        });
    }

    // Remplissage du filtre PLATEFORME (Spécifique aux Jeux Vidéos)
    if (category === 'jeux-videos' && platformFilter) {
        platformFilter.innerHTML = '<option value="all">Toutes les Plateformes</option>';
        Array.from(relevantPlatforms).sort().forEach(platform => {
            const option = document.createElement('option');
            option.value = platform;
            option.textContent = platform;
            platformFilter.appendChild(option);
        });
    }

    // Attache les événements de changement (y compris les nouveaux filtres)
    if (filterContainer) {
        filterContainer.addEventListener('change', () => filterAndRenderProducts(category));
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            filterAndRenderProducts(category); 
        });
    }
    
    // Initialise l'ordre par défaut pour la page BD/Comics si le tri est présent
    if (category === 'bd-comics' && sortFilter) {
        sortFilter.value = 'title-asc'; 
    }
}

function filterAndRenderProducts(category) {
    const query = (document.getElementById('search-input')?.value || '').toLowerCase();
    const genre = document.getElementById('genre-filter')?.value;
    const year = document.getElementById('year-filter')?.value;
    const sortValue = document.getElementById('sort-filter')?.value || 'default'; 
    const platform = document.getElementById('platform-filter')?.value; // NOUVEAU

    
    let filteredProducts = PRODUCTS.filter(p => category === 'all' || p.category === category);
    
    // 1. FILTRAGE
    if (query) {
        filteredProducts = filteredProducts.filter(product => {
            return product.title.toLowerCase().includes(query) || 
                   product.synopsis.toLowerCase().includes(query);
        });
    }

    if (genre && genre !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.genre === genre);
    }
    
    if (year && year !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.year === parseInt(year));
    }
    
    // FILTRAGE SPÉCIFIQUE À LA PLATEFORME (pour la catégorie jeux-videos)
    if (category === 'jeux-videos' && platform && platform !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.platform === platform);
    }
    
    // 2. TRI (APPLIQUÉ APRÈS LE FILTRAGE)
    if (sortValue !== 'default') {
        filteredProducts.sort((a, b) => {
            switch (sortValue) {
                case 'title-asc':
                    return a.title.localeCompare(b.title); // Tri A-Z
                case 'title-desc':
                    return b.title.localeCompare(a.title); // Tri Z-A
                case 'year-asc':
                    return a.year - b.year; // Tri Année (Ancien -> Récent)
                case 'year-desc':
                    return b.year - a.year; // Tri Année (Récent -> Ancien)
                default:
                    return 0;
            }
        });
    }
    
    renderProducts(category, filteredProducts); 
}

function renderProducts(category, productsToRender = PRODUCTS) {
    const container = document.getElementById('product-catalogue-grid');
    if (!container) return;

    container.innerHTML = ''; 
    
    if (productsToRender.length === 0) {
        container.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; margin-top: 2rem;">
            Aucun produit trouvé dans cette catégorie avec les critères de recherche sélectionnés.
        </p>`;
    } else {
        productsToRender.forEach(product => {
            container.appendChild(createProductCard(product));
        });
    }
    
    attachProductClickListeners();
}


// **********************************************
// LOGIQUE PRODUIT ET MODALE (inchangée)
// **********************************************

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-product-id', product.id);
    
    const promoBadge = product.isOffer 
        ? '<div class="promo-badge">PROMO</div>'
        : '';
        
    const priceDisplay = product.isOffer && product.originalPrice
        ? `<p class="original-price">${product.originalPrice.toFixed(0)} ${CURRENCY_SYMBOL}</p>
           <p class="product-price">${product.price.toFixed(0)} ${CURRENCY_SYMBOL}</p>`
        : `<p class="product-price">${product.price.toFixed(0)} ${CURRENCY_SYMBOL}</p>`;


    card.innerHTML = `
        <div class="product-image-container">
            ${promoBadge} 
            <img src="${product.image_url}" alt="${product.title}" class="product-image">
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <div class="price-display-container">
               ${priceDisplay}
            </div>
        </div>
    `;
    return card;
}

function attachProductClickListeners() {
    document.querySelectorAll('.product-card').forEach(card => {
        card.removeEventListener('click', handleProductClick);
        card.addEventListener('click', handleProductClick);
    });
}

function handleProductClick(event) {
    const productId = parseInt(event.currentTarget.getAttribute('data-product-id'));
    const product = PRODUCTS.find(p => p.id === productId);
    if (product) {
        showProductModal(product);
    }
}

function showProductModal(product) {
    closeProductModal(); 
    
    const details = product.category === 'bd-comics'
        ? `<p><strong>Pages :</strong> ${product.pages}</p>`
        : product.category === 'films' || product.category === 'series'
        ? `<p><strong>Durée :</strong> ${product.duration}</p>`
        : product.category === 'jeux-videos'
        ? `<p><strong>Plateforme :</strong> ${product.platform || 'Numérique'}</p>`
        : '';
        
    const priceDetail = product.isOffer && product.originalPrice 
        ? `<p class="original-price" style="font-size: 1.2rem; margin-bottom: 0;">${product.originalPrice.toFixed(0)} ${CURRENCY_SYMBOL}</p>
           <p class="detail-price">${product.price.toFixed(0)} ${CURRENCY_SYMBOL}</p>`
        : `<p class="detail-price">${product.price.toFixed(0)} ${CURRENCY_SYMBOL}</p>`;


    const modalContent = `
        <div class="modal-backdrop" id="product-modal">
            <div class="modal-content">
                <button class="close-button" onclick="closeProductModal()">X</button>
                <div class="product-detail-view">
                    <img src="${product.image_url}" alt="${product.title}" class="detail-image">
                    <div class="product-details-text">
                        <h2>${product.title}</h2>
                        <div class="modal-price-container">
                            ${priceDetail}
                        </div>
                        
                        <div class="meta-info">
                            <p><strong>Genre :</strong> ${product.genre}</p>
                            <p><strong>Année :</strong> ${product.year}</p>
                            ${details}
                        </div>
                        
                        <h3>Synopsis :</h3>
                        <p>${product.synopsis}</p>

                        <div class="action-buttons">
                            <button class="btn-whatsapp" onclick="handleWhatsAppBuy(${product.id})">
                                <i class="fab fa-whatsapp"></i> Acheter (WhatsApp)
                            </button>
                            
                            <button class="btn-add-to-cart" onclick="addToCart(${product.id}); closeProductModal();">
                                Ajouter au Panier
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalContent);
}

function closeProductModal() {
    const modal = document.getElementById('product-modal');
    if (modal) {
        modal.remove();
    }
}

function handleWhatsAppBuy(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    const price = product.price.toFixed(0);
    const message = `Bonjour Le Grade Zéro, je souhaite acheter immédiatement l'article suivant : 
    - ${product.title} (Prix: ${price} ${CURRENCY_SYMBOL}).
    Merci de m'indiquer la procédure de paiement.`;
    
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
}


// **********************************************
// LOGIQUE PANIER ET TOAST (inchangée)
// **********************************************

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (product) {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('gradeZeroCart', JSON.stringify(cart));
        updateCartCount();
        showToastNotification(`${product.title} ajouté au panier !`, 'success');
    }
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

function renderCartItems() {
    const container = document.getElementById('cart-items-container');
    const productsSubtotalElement = document.getElementById('products-subtotal-price');
    const totalPriceElement = document.getElementById('cart-total-price');
    const emptyMessage = document.getElementById('empty-cart-message');
    const checkoutButton = document.getElementById('checkout-whatsapp-button');
    const clearButton = document.getElementById('clear-cart-button');
    
    const summary = document.querySelector('.cart-summary');
    let feeLine = summary.querySelector('.shipping-line');
    
    if (!container || !totalPriceElement || !productsSubtotalElement) return; 

    container.innerHTML = ''; 
    let productsSubtotal = 0;

    if (cart.length === 0) {
        if (emptyMessage) emptyMessage.style.display = 'block';
        if (checkoutButton) checkoutButton.disabled = true;
        if (clearButton) clearButton.disabled = true;
        if (feeLine) feeLine.remove(); 
        productsSubtotalElement.textContent = `0 ${CURRENCY_SYMBOL}`;
        totalPriceElement.textContent = `0 ${CURRENCY_SYMBOL}`;

    } else {
        if (emptyMessage) emptyMessage.style.display = 'none';
        if (checkoutButton) checkoutButton.disabled = false;
        if (clearButton) clearButton.disabled = false;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            productsSubtotal += itemTotal;
            
            const unitPriceDisplay = item.isOffer && item.originalPrice
                ? `<span class="original-price-cart">${item.originalPrice.toFixed(0)} ${CURRENCY_SYMBOL}</span>
                   <span class="current-price-cart">${item.price.toFixed(0)} ${CURRENCY_SYMBOL}</span>`
                : `<span class="current-price-cart">${item.price.toFixed(0)} ${CURRENCY_SYMBOL}</span>`;

            const itemHTML = document.createElement('div');
            itemHTML.className = 'cart-item';
            
            itemHTML.innerHTML = `
                <div class="item-details">
                    <img src="${item.image_url}" alt="${item.title}" class="item-image">
                    <div>
                        <p class="item-name">${item.title}</p>
                        <p class="item-price-unit">Prix Unitaire</p>
                    </div>
                </div>
                <div class="item-price-col dynamic-price-col">
                   ${unitPriceDisplay}
                </div>
                <div class="item-controls">
                    <button onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
                <p class="item-subtotal">${itemTotal.toFixed(0)} ${CURRENCY_SYMBOL}</p>
                <button class="remove-item-button" onclick="removeItem(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            container.appendChild(itemHTML);
        });
        
        if (!feeLine) {
            feeLine = document.createElement('div');
            feeLine.className = 'shipping-line';
            feeLine.innerHTML = `
                <p>Frais de transaction fixes :</p>
                <p>${TRANSACTION_FEE.toFixed(0)} ${CURRENCY_SYMBOL}</p>
            `;
            const totalLine = summary.querySelector('.total-line');
            summary.insertBefore(feeLine, totalLine);
        }
    }

    const totalGeneral = cart.length > 0 ? productsSubtotal + TRANSACTION_FEE : 0;
    
    productsSubtotalElement.textContent = `${productsSubtotal.toFixed(0)} ${CURRENCY_SYMBOL}`;
    totalPriceElement.textContent = `${totalGeneral.toFixed(0)} ${CURRENCY_SYMBOL}`;
}

function handleWhatsAppCheckout() {
    if (cart.length === 0) {
        showToastNotification("Votre panier est vide.", 'error');
        return;
    }
    
    let message = "Bonjour Le Grade Zéro, je souhaite commander les articles suivants :\n\n";
    let productsSubtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        productsSubtotal += itemTotal;
        message += `- ${item.title} (x${item.quantity}) - Prix unitaire: ${item.price.toFixed(0)} ${CURRENCY_SYMBOL} - Quantité: ${item.quantity} - Total article: ${itemTotal.toFixed(0)} ${CURRENCY_SYMBOL}\n`;
    });
    
    const totalGeneral = productsSubtotal + TRANSACTION_FEE;

    message += `\n--- Récapitulatif ---\n`;
    message += `Sous-total des produits : ${productsSubtotal.toFixed(0)} ${CURRENCY_SYMBOL}\n`;
    message += `Frais de transaction fixes : ${TRANSACTION_FEE.toFixed(0)} ${CURRENCY_SYMBOL}\n`;
    message += `Total général de la commande : ${totalGeneral.toFixed(0)} ${CURRENCY_SYMBOL}\n\n`;
    message += "Merci de m'indiquer la procédure pour le paiement et l'accès à ma bibliothèque numérique.";
    
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    
    setTimeout(() => {
         clearCart(false); // Vider sans demander confirmation
         showToastNotification("Commande envoyée sur WhatsApp. Panier vidé.", 'info');
    }, 500);
}

function changeQuantity(productId, delta) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += delta;
        if (cart[itemIndex].quantity <= 0) {
            removeItem(productId);
        } else {
            localStorage.setItem('gradeZeroCart', JSON.stringify(cart));
            renderCartItems(); 
            updateCartCount(); 
        }
    }
}
function removeItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('gradeZeroCart', JSON.stringify(cart));
    renderCartItems();
    updateCartCount();
    showToastNotification("Article retiré du panier.", 'info');
}
function clearCart(shouldConfirm = true) {
    if (shouldConfirm && !confirm("Êtes-vous sûr de vouloir vider tout votre panier ?")) {
        return;
    }
    cart = [];
    localStorage.removeItem('gradeZeroCart');
    renderCartItems();
    updateCartCount();
    showToastNotification("Le panier a été vidé.", 'info');
}
function attachCartListeners() {
    const checkoutButton = document.getElementById('checkout-whatsapp-button');
    const clearButton = document.getElementById('clear-cart-button');

    if (checkoutButton) {
        checkoutButton.addEventListener('click', handleWhatsAppCheckout);
    }
    if (clearButton) {
        clearButton.addEventListener('click', () => clearCart(true));
    }
}


// **********************************************
// FONCTIONS DE NOTIFICATION TOAST (inchangée)
// **********************************************

function showToastNotification(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return; 

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // Ajoute l'icône appropriée (nécessite Font Awesome)
    const iconClass = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-times-circle' : 'fa-info-circle';
    toast.innerHTML = `<i class="fas ${iconClass}"></i> ${message}`;
    
    container.appendChild(toast);

    toast.offsetHeight; // Force le reflow 
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10); 

    // Disparaît et supprime après 4 secondes
    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hide');
        
        setTimeout(() => {
            toast.remove();
        }, 500); 
    }, 4000); 
}