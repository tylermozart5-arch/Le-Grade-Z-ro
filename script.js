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
        title: "Avengers (Marvel France - 2020): 2. Le starkronomicon",
        category: "series",
        price: 1500,
        genre: "Guerre", 
        year: 2021,
        duration: "Saison 1",
        synopsis: "Le quotidien d'une unité de soldats pendant la guerre froide.",
        image_url: "https://www.bedetheque.com/media/Couvertures/Couv_385291.jpg",
        isOffer: false
    },
    
    // BD / COMICS
    {
        id: 2,
        title: "Avengers (Marvel France - 2020): 1. La crise des dix royaumes",
        category: "bd-comics", 
        price: 1500, 
        genre: "Guerre", 
        year: 2020, 
        pages: 113,
        synopsis: "C'est le début de l'invasion massive de Midgard (la Terre) par Malekith le Fléau et son armée des dix royaumes mythologiques, un événement crossover majeur dans l'univers Marvel.",
        image_url: "https://www.bedetheque.com/media/Couvertures/Couv_383213.jpg",
        isOffer: false
    },
    {
        id: 5,
        title: "Avengers (Marvel France - 2020): 2. Le starkronomicon",
        category: "bd-comics",
        price: 1200, // -20% de 1500
        originalPrice: 1500,
        genre: "Guerre", 
        year: 2020,
        pages: 115,
        synopsis: "Dans ce contexte, Tony Stark se retrouve à devoir affronter le dragon Sadurang qui attaque New York. Le problème est que la magie du dragon interfère avec l'armure high-tech de Tony, la rendant presque inutile. Son armure est même corrompue au point de se transformer temporairement en une sorte d'armure médiévale mystique qu'il ne maîtrise pas.",
        image_url: "https://www.bedetheque.com/media/Couvertures/Couv_385291.jpg",
        isOffer: true
    },
    {
        id: 20,
        title: "Avengers (Marvel France - 2020): 3. Instants volés",
        category: "bd-comics",
        price: 1500,
        genre: "Guerre", 
        year: 2020,
        pages: 117,
        synopsis: "Le statu quo est bouleversé : Asgard a chuté, et les héros de la Terre se retrouvent en première ligne d'un conflit qui les dépasse. Les Avengers, divisés et désorganisés, luttent pour contenir les invasions qui éclatent simultanément aux quatre coins du globe.",
        image_url: "https://www.bedetheque.com/media/Couvertures/Couv_387414.jpg",
        isOffer: false
    },
    {
        id: 30, 
        title: "Avengers (Marvel France - 2020): 4. Chambre d'écho",
        category: "bd-comics",
        price: 1500,
        genre: "Guerre", 
        year: 2020,
        pages: 117,
        synopsis: "Les Avengers font face à une menace surnaturelle qui les mène à un défi des Ghost Riders forcé, mettant en lumière la mythologie entourant Robbie Reyes.",
        image_url: "https://www.bedetheque.com/media/Couvertures/Couv_396119.jpg",
        isOffer: false
    },
    {
        id: 47, 
        title: "Avengers (Marvel France - 2020): 5. Le crépuscule du Dieu du tonnerre",
        category: "bd-comics",
        price: 1500,
        genre: "Guerre", 
        year: 2020,
        pages: 116,
        synopsis: "Robbie Reyes, le Ghost Rider actuel, cherche un moyen de se libérer de l'Esprit de la Vengeance qui l'habite. Un exorcisme est tenté, mais le rituel tourne mal, l'envoyant directement en Enfer.",
        image_url: "https://www.bedetheque.com/media/Couvertures/Couv_398168.jpg",
        isOffer: false
    },
    {
        id: 48, 
        title: "Avengers (Marvel France - 2020): 6. Le projet Ultron",
        category: "bd-comics",
        price: 1500,
        genre: "Guerre", 
        year: 2020,
        pages: 115,
        synopsis: "L'heure est venue de l'affrontement final entre les Ghost Riderpour décrocher le titre de Roi de l'Enfer, sous l'œil vigilant des Avengers! Le roi Thor doit de nouveau affronter Gorr, tandis que Captain America croise un vieil ami…",
        image_url: "https://www.bedetheque.com/media/Couvertures/Couv_400994.jpg",
        isOffer: false
    },
    {
        id: 49, 
        title: "Avengers (Marvel France - 2020): 7. Carnage absolu",
        category: "bd-comics",
        price: 1500,
        genre: "Guerre", 
        year: 2020,
        pages: 113,
        synopsis: "Cletus Kasady, l'hôte originel du symbiote Carnage, est de retour d'entre les morts. Plus puissant et plus psychopathe que jamais, il ne recherche pas seulement le symbiote Venom de son ancien camarade Eddie Brock, mais cible méthodiquement quiconque a un jour porté l'un des symbiotes extraterrestres.",
        image_url: "https://www.bedetheque.com/media/Couvertures/Couv_402750.jpg",
        isOffer: false
    },
    {
        id: 50, 
        title: "Avengers (Marvel France - 2020): 8. Le retour de Starbrand",
        category: "bd-comics",
        price: 1500,
        genre: "Guerre", 
        year: 2020,
        pages: 112,
        synopsis: "Le précédent Starbrand ayant été accidentellement tué par Ghost Rider, son immense pouvoir cosmique erre dans l'univers à la recherche d'un nouvel hôte.",
        image_url: "https://www.bedetheque.com/media/Couvertures/Couv_404839.jpg",
        isOffer: false
    },
    {
        id: 51, 
        title: "Avengers (Marvel France - 2020): 9. Le Roi Dévoreur",
        category: "bd-comics",
        price: 1800,
        genre: "Guerre", 
        year: 2020,
        pages: 114,
        synopsis: "Devenu le nouveau roi d'Asgard après la Guerre des Royaumes, Thor peine à assumer ses nouvelles responsabilités. C'est alors que Galactus, le Dévoreur de Mondes, s'écrase, gravement blessé, sur Asgard.",
        image_url: "https://www.bedetheque.com/media/Couvertures/Couv_407499.jpg",
        isOffer: false
    },
    {
        id: 52, 
        title: "Avengers (Marvel France - 2020): 10. Nativité stellaire",
        category: "bd-comics",
        price: 1500,
        genre: "Guerre", 
        year: 2020,
        pages: 113,
        synopsis: "Les Avengers découvrent le nouveau Starbrand, Thor choisit de suivre Galactus, Iron Man est piégé à l'Âge de Pierre et Arno Stark est confronté à la révolution des robots.",
        image_url: "https://www.bedetheque.com/media/Couvertures/Couv_410712.jpg",
        isOffer: false
    },
    {
        id: 53, 
        title: "Avengers (Marvel France - 2020): Nexus war: Thor",
        category: "bd-comics",
        price: 1800,
        genre: "Guerre", 
        year: 2020,
        pages: 122,
        synopsis: "Afin d’empêcher l’apparition de l’entité destructrice d’univers connue sous le nom d’Hiver Noir, Thor accepte à contrecœur de devenir le héraut de Galactus.",
        image_url: "https://www.bedetheque.com/media/Couvertures/Couv_413985.jpg",
        isOffer: false
    },
    {
        id: 54, 
        title: "Avengers (Marvel France - 2020): L'ère de Khonshu (1)",
        category: "bd-comics",
        price: 1500,
        genre: "Guerre", 
        year: 2020,
        pages: 110,
        synopsis: "Khonshu a des visions prophétiques terrifiantes sur la fin du monde, causée par le démon Méphisto. Convaincu que les Avengers sont incapables de gérer cette menace, Khonshu décide d'agir à sa manière radicale.",
        image_url: "https://www.bedetheque.com/media/Couvertures/Couv_416190.jpg",
        isOffer: false
    },
    {
        id: 55, 
        title: "Avengers (Marvel France - 2020): L'ère de Khonshu (2)",
        category: "bd-comics",
        price: 1500,
        genre: "Guerre", 
        year: 2020,
        pages: 104,
        synopsis: "Khonshu, le dieu égyptien de la lune et de la vengeance, a réussi à vaincre la plupart des Avengers un par un, en utilisant son avatar Moon Knight pour absorber leurs pouvoirs",
        image_url: "https://www.bedetheque.com/media/Couvertures/Couv_419343.jpg",
        isOffer: false
    },
    {
        id: 56, 
        title: "Miles Morales (2e série): 2. Mauvais sang",
        category: "bd-comics",
        price: 1200,
        genre: "Aventure", 
        year: 2023,
        pages: 104,
        synopsis: " Alors que des vilains majeurs comme Carnage et le Super-Bouffon s'en prennent à lui, son plus grand défi devient la gestion de ses propres émotions et responsabilités.",
        image_url: "https://www.bedetheque.com/media/Couvertures/Couv_496029.jpg",
        isOffer: false
    },                                                     
    
    // JEUX VIDÉOS
    {
        id: 3,
        title: "Jeu: Cyber-Racer 2077",
        category: "jeux-videos", 
        price: 7920, 
        originalPrice: 9900,
        genre: "Course", 
        year: 2024,
        platform: "PC", 
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
        platform: "PS3", 
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
        platform: "Mobile Android", 
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
        platform: "PS2", 
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
        platform: "Mobile Android", 
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
        platform: "PS3", 
        synopsis: "Une aventure en monde ouvert avec des énigmes complexes.",
        image_url: "https://i.imgur.com/ff4500.png", 
        isOffer: false
    },
    
    // MANGAS (NOUVELLE CATÉGORIE)
    {
        id: 35,
        title: "Manga: L'Ascension du Sorcier",
        category: "mangas",
        price: 5900,
        genre: "Shonen", // Genre 1
        year: 2024,
        pages: 180,
        synopsis: "Un jeune garçon sans pouvoir magique se lance dans une quête pour devenir le plus grand sorcier.",
        image_url: "https://i.imgur.com/4169e1.png", 
        isOffer: false
    },
    {
        id: 36,
        title: "Manga: Le Clan des Esprits",
        category: "mangas",
        price: 4800,
        genre: "Shôjo", // Genre 2
        year: 2023,
        pages: 170,
        synopsis: "Une lycéenne découvre qu'elle est la dernière descendante d'un clan capable de communiquer avec les esprits de la nature.",
        image_url: "https://i.imgur.com/f0f8ff.png", 
        isOffer: false
    },
    {
        id: 37,
        title: "Manga: Chroniques de Cyber-Tokyo",
        category: "mangas",
        price: 6500,
        genre: "Seinen", // Genre 3
        year: 2024,
        pages: 200,
        synopsis: "Une histoire cyberpunk sombre et mature sur la lutte contre un gouvernement dystopique.",
        image_url: "https://i.imgur.com/6a5acd.png", 
        isOffer: false
    },
    {
        id: 38,
        title: "Manga: La Cuisine d'Akira",
        category: "mangas",
        price: 4500,
        genre: "Tranche de vie", // Genre 4
        year: 2022,
        pages: 160,
        synopsis: "Suivez le quotidien apaisant d'un jeune chef ouvrant son premier restaurant.",
        image_url: "https://i.imgur.com/8b0000.png", 
        isOffer: true
    },
    {
        id: 39,
        title: "Manga: L'Armée des Ténèbres",
        category: "mangas",
        price: 5500,
        genre: "Horreur", // Genre 5
        year: 2023,
        pages: 180,
        synopsis: "Des phénomènes surnaturels terrifiants frappent une petite communauté rurale.",
        image_url: "https://i.imgur.com/2c2c2c.png", 
        isOffer: false
    },
    {
        id: 40,
        title: "Manga: L'Ère des Dragons",
        category: "mangas",
        price: 7000,
        genre: "Fantaisie", // Genre 6
        year: 2024,
        pages: 190,
        synopsis: "Un monde où les humains cohabitent avec des dragons, jusqu'à ce que la guerre éclate.",
        image_url: "https://i.imgur.com/8f8f8f.png", 
        isOffer: false
    },
    {
        id: 41,
        title: "Manga: Le Code M",
        category: "mangas",
        price: 6000,
        genre: "Mystère", // Genre 7
        year: 2023,
        pages: 175,
        synopsis: "Une série d'énigmes complexes mène un détective amateur sur la piste d'un tueur en série.",
        image_url: "https://i.imgur.com/4f4f4f.png", 
        isOffer: false
    },
    {
        id: 42,
        title: "Manga: Course pour l'Espace",
        category: "mangas",
        price: 5800,
        genre: "Sport", // Genre 8
        year: 2024,
        pages: 160,
        synopsis: "L'histoire d'un athlète qui rêve de participer aux jeux olympiques de l'espace.",
        image_url: "https://i.imgur.com/008000.png", 
        isOffer: false
    },
    {
        id: 43,
        title: "Manga: Rire à En mourir",
        category: "mangas",
        price: 4500,
        genre: "Comédie", // Genre 9
        year: 2023,
        pages: 150,
        synopsis: "Un manga burlesque et absurde qui suit les péripéties d'un groupe d'amis excentriques.",
        image_url: "https://i.imgur.com/f08080.png", 
        isOffer: true
    },
    {
        id: 44,
        title: "Manga: Amour et Destin",
        category: "mangas",
        price: 5200,
        genre: "Romance", // Genre 10
        year: 2022,
        pages: 170,
        synopsis: "Un triangle amoureux compliqué au sein d'un club de lycée.",
        image_url: "https://i.imgur.com/0000ff.png", 
        isOffer: false
    },
    {
        id: 45,
        title: "Manga: La Légende des Samouraïs",
        category: "mangas",
        price: 6200,
        genre: "Historique", // Genre 11
        year: 2024,
        pages: 195,
        synopsis: "Une épopée au cœur de l'ère Sengoku, suivant un samouraï déchu.",
        image_url: "https://i.imgur.com/20b2aa.png", 
        isOffer: false
    },
    {
        id: 46,
        title: "Manga: Aventure Galactique",
        category: "mangas",
        price: 6900,
        genre: "Aventure", // Genre 12
        year: 2023,
        pages: 185,
        synopsis: "L'histoire d'un équipage spatial explorant des galaxies lointaines et dangereuses.",
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
    const platformFilter = document.getElementById('platform-filter'); 
    const searchInput = document.getElementById('search-input');
    const filterContainer = document.getElementById('filter-controls');

    const relevantProducts = PRODUCTS.filter(p => category === 'all' || p.category === category);
    
    // Récupère les genres, années et plateformes uniques
    let relevantGenres = new Set(relevantProducts.map(p => p.genre).filter(Boolean));
    let relevantYears = new Set(relevantProducts.map(p => p.year).filter(Boolean));
    let relevantPlatforms = new Set(relevantProducts.map(p => p.platform).filter(Boolean));

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
    
    // Initialise l'ordre par défaut pour les pages BD/Comics et MANGAS
    if ((category === 'bd-comics' || category === 'mangas') && sortFilter) {
        sortFilter.value = 'title-asc'; 
    }
}

function filterAndRenderProducts(category) {
    const query = (document.getElementById('search-input')?.value || '').toLowerCase();
    const genre = document.getElementById('genre-filter')?.value;
    const year = document.getElementById('year-filter')?.value;
    const sortValue = document.getElementById('sort-filter')?.value || 'default'; 
    const platform = document.getElementById('platform-filter')?.value; 

    
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
// LOGIQUE PRODUIT ET MODALE
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
    
    const details = product.category === 'bd-comics' || product.category === 'mangas'
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
// LOGIQUE PANIER
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
    // Trouve ou crée la ligne des frais de transaction pour la section Résumé
    let feeLine = summary.querySelector('.shipping-line');
    
    if (!container || !totalPriceElement || !productsSubtotalElement) return; 

    container.innerHTML = ''; 
    let productsSubtotal = 0;

    if (cart.length === 0) {
        // Affichage si le panier est vide
        if (emptyMessage) emptyMessage.style.display = 'block';
        if (checkoutButton) checkoutButton.disabled = true;
        if (clearButton) clearButton.disabled = true;
        if (feeLine) feeLine.remove(); 
        productsSubtotalElement.textContent = `0 ${CURRENCY_SYMBOL}`;
        totalPriceElement.textContent = `0 ${CURRENCY_SYMBOL}`;

    } else {
        // Affichage si le panier a des articles
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
        
        // Ajout de la ligne des frais de transaction s'il n'existe pas
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
// FONCTIONS DE NOTIFICATION TOAST
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
