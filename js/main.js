// Initialize AOS Animation Library
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease'
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Back to top button
window.addEventListener('scroll', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Course data
const courseData = [
    {
        id: 1,
        name: 'ANGLAIS',
        description: 'Cours d\'anglais pour les étudiants en télécommunications et réseaux',
        documents: [
            { name: 'Cours 1', path: 'PROJET DAN/LISTE DES COURS/ANGLAIS/cours 1.pdf', newPath: 'resources/documents/anglais/cours_1.pdf' },
            { name: 'Cours 2', path: 'PROJET DAN/LISTE DES COURS/ANGLAIS/COURS 2.pdf', newPath: 'resources/documents/anglais/cours_2.pdf' }
        ]
    },
    {
        id: 2,
        name: 'ELECTRONIQUE ANALOGIQUE',
        description: 'Principes fondamentaux de l\'électronique analogique',
        documents: [
            { name: 'Documents', path: 'PROJET DAN/LISTE DES COURS/ELECTRONIQUE ANALOGIQUE/' }
        ]
    },
    {
        id: 3,
        name: 'GEOLOGIE',
        description: 'Étude des structures et matériaux de la Terre',
        documents: [
            { name: 'Documents', path: 'PROJET DAN/LISTE DES COURS/GEOLOGIE/' }
        ]
    },
    {
        id: 4,
        name: 'GSM',
        description: 'Systèmes de communication mobile et technologies GSM',
        documents: [
            { name: 'Documents', path: 'PROJET DAN/LISTE DES COURS/GSM/' }
        ]
    },
    {
        id: 5,
        name: 'HYPERFREQUENCES',
        description: 'Étude des ondes électromagnétiques à haute fréquence',
        documents: [
            { name: 'Documents', path: 'PROJET DAN/LISTE DES COURS/HYPERFREQUENCES/' }
        ]
    },
    {
        id: 6,
        name: 'LANGAGE INFORMATIQUE',
        description: 'Programmation et langages informatiques',
        documents: [
            { name: 'Documents', path: 'PROJET DAN/LISTE DES COURS/LANGAGE INFORMATIQUE/' }
        ]
    },
    {
        id: 7,
        name: 'MATHEMATIQUES',
        description: 'Concepts mathématiques appliqués aux télécommunications',
        documents: [
            { name: 'Documents', path: 'PROJET DAN/LISTE DES COURS/MATHEMATIQUES/' }
        ]
    },
    {
        id: 8,
        name: 'MECANIQUE DES FLUIDES',
        description: 'Étude du comportement des fluides et de leurs applications',
        documents: [
            { name: 'Documents', path: 'PROJET DAN/LISTE DES COURS/MECANIQUE DES FLUIDES/' }
        ]
    },
    {
        id: 9,
        name: 'SECURITE INFORMATIQUE',
        description: 'Protection des systèmes d\'information contre les menaces et vulnérabilités',
        documents: [
            { name: 'Documents', path: 'PROJET DAN/LISTE DES COURS/SECURITE INFORMATIQUE/' }
        ]
    },
    {
        id: 10,
        name: 'SECURITE OPERATIONNELLE',
        description: 'Mesures de sécurité pour les opérations informatiques',
        documents: [
            { name: 'Documents', path: 'PROJET DAN/LISTE DES COURS/SECURITE OPERATIONNELLE/' }
        ]
    }
];

// Favorite videos data
const videosData = [
    {
        id: 1,
        title: 'Amazing Grace',
        thumbnail: 'https://img.youtube.com/vi/CDdvReNKKuk/maxresdefault.jpg',
        description: 'Une interprétation puissante de "Amazing Grace"',
        url: 'yt5s.com-An audience powerful rendition of “Amazing Grace_.mp4',
        isLocal: true
    },
    {
        id: 2,
        title: 'DEAR GIRLS, YOU\'RE UGLY',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        description: 'Vidéo motivante pour les moments difficiles',
        url: 'yt5s.com-DEAR GIRLS, YOU\'RE UGLY (2023).mp4',
        isLocal: true
    },
    {
        id: 3,
        title: 'LAWYER DESTROYS RACISM',
        thumbnail: 'https://img.youtube.com/vi/1I9ADpXbD6c/maxresdefault.jpg',
        description: 'Un avocat détruit le racisme avec des arguments percutants',
        url: 'yt5s.com-LAWYER DESTROYS RACISM, WHAT HAPPENS NEXT WILL SHOCK YOU.mp4',
        isLocal: true
    }
];

// Favorite music data
const musicData = [
    {
        id: 1,
        title: 'Oceans (Where Feet May Fail)',
        artist: 'Hillsong United',
        thumbnail: 'https://img.youtube.com/vi/6GGFb6LcX3U/maxresdefault.jpg',
        description: 'Une chanson inspirante de Hillsong United',
        url: 'yt5s.com-Oceans (Where Feet May Fail) - Hillsong United lyrics.mp4',
        isLocal: true
    },
    {
        id: 2,
        title: 'Seigneur Je crois en toi',
        artist: 'Divine Mosaka',
        thumbnail: 'https://img.youtube.com/vi/9Y3xgQfPHcI/maxresdefault.jpg',
        description: 'Une belle interprétation par Divine Mosaka',
        url: 'yt5s.com-Seigneur Je crois en toi - Cover - Divine Mosaka-(240p).mp4',
        isLocal: true
    },
    {
        id: 3,
        title: 'Chant d\'espoir',
        artist: 'Divine Mosaka',
        thumbnail: 'images/chansons.jpg',
        description: 'Un chant d\'espoir par Divine Mosaka',
        url: 'resources/music/divine_mosaka/chant_d_espoir.mp4',
        isLocal: true
    }
];

// Favorite websites data
const websitesData = [
    {
        id: 1,
        title: 'GitHub',
        thumbnail: 'images/github.jpg',
        description: 'Plateforme de développement collaboratif pour stocker et partager du code',
        url: 'https://github.com'
    },
    {
        id: 2,
        title: 'Stack Overflow',
        thumbnail: 'images/stackoverflow.jpg',
        description: 'Communauté de développeurs pour poser et répondre à des questions de programmation',
        url: 'https://stackoverflow.com'
    },
    {
        id: 3,
        title: 'MDN Web Docs',
        thumbnail: 'images/mdn.jpg',
        description: 'Documentation complète sur les technologies web',
        url: 'https://developer.mozilla.org'
    }
];

// Hobbies data
const hobbiesData = [
    {
        id: 1,
        title: 'Programmation',
        icon: 'fas fa-code',
        description: 'Développement de sites web et d\'applications'
    },
    {
        id: 2,
        title: 'Musique',
        icon: 'fas fa-music',
        description: 'Écouter et jouer de la musique'
    },
    {
        id: 3,
        title: 'Lecture',
        icon: 'fas fa-book',
        description: 'Livres techniques et romans'
    },
    {
        id: 4,
        title: 'Sport',
        icon: 'fas fa-futbol',
        description: 'Football et basketball'
    }
];

// Function to populate courses table
function populateCoursesTable() {
    const tableBody = document.querySelector('.course-table tbody');
    if (!tableBody) return;
    
    courseData.forEach(course => {
        const row = document.createElement('tr');
        
        // Créer une liste de liens pour les documents
        let documentsLinks = '';
        if (course.documents && course.documents.length > 0) {
            documentsLinks = '<ul class="list-unstyled mb-0">';
            course.documents.forEach(doc => {
                // Utiliser le nouveau chemin s'il existe, sinon utiliser l'ancien
                const filePath = doc.newPath || doc.path;
                documentsLinks += `<li><a href="${filePath}" target="_blank" class="document-link"><i class="fas fa-file-pdf me-2"></i>${doc.name}</a></li>`;
            });
            documentsLinks += '</ul>';
        }
        
        row.innerHTML = `
            <th scope="row">${course.id}</th>
            <td>${course.name}</td>
            <td>${course.description}</td>
            <td>${documentsLinks}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to create card for favorites (videos, music, websites)
function createFavoriteCard(item, type) {
    const card = document.createElement('div');
    card.className = 'col-md-4 favorite-item';
    
    // Déterminer le bouton et l'action en fonction du type et si c'est un fichier local
    let buttonText = type === 'videos' ? 'Regarder' : type === 'music' ? 'Écouter' : 'Visiter';
    let buttonAction = '';
    
    if (item.isLocal) {
        // Pour les fichiers locaux, créer un bouton qui ouvre le fichier dans un lecteur
        buttonAction = `onclick="playMedia('${item.url}', '${type}')" href="javascript:void(0)"`;
    } else {
        // Pour les liens externes, utiliser un lien normal
        buttonAction = `href="${item.url}" target="_blank"`;
    }
    
    card.innerHTML = `
        <div class="card">
            <img src="${item.thumbnail}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                ${type === 'music' ? `<h6 class="card-subtitle mb-2 text-muted">${item.artist}</h6>` : ''}
                <p class="card-text">${item.description}</p>
                <a ${buttonAction} class="btn btn-primary">
                    <i class="fas ${type === 'videos' ? 'fa-play' : type === 'music' ? 'fa-music' : 'fa-link'} me-2"></i>${buttonText}
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// Function to play media files
function playMedia(url, type) {
    // Créer une modal pour afficher le contenu média
    const modal = document.createElement('div');
    modal.className = 'media-modal';
    
    let mediaContent = '';
    if (type === 'videos' || type === 'music') {
        mediaContent = `
            <div class="media-container">
                <video controls autoplay>
                    <source src="${url}" type="video/mp4">
                    Votre navigateur ne prend pas en charge la lecture de vidéos.
                </video>
                <button class="close-button" onclick="closeMediaModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
    }
    
    modal.innerHTML = mediaContent;
    document.body.appendChild(modal);
    
    // Ajouter un petit délai avant d'afficher la modal pour permettre l'animation
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Empêcher le défilement du corps de la page
    document.body.style.overflow = 'hidden';
}

// Function to close media modal
function closeMediaModal() {
    const modal = document.querySelector('.media-modal');
    if (modal) {
        // Retirer la classe active pour déclencher l'animation de sortie
        modal.classList.remove('active');
        
        // Attendre la fin de l'animation avant de supprimer la modal
        setTimeout(() => {
            document.body.removeChild(modal);
            // Réactiver le défilement
            document.body.style.overflow = '';
        }, 300);
    }
}

// Function to populate favorites sections
function populateFavorites() {
    // Videos
    const videosContainer = document.getElementById('videos-container');
    if (videosContainer) {
        videosData.forEach(video => {
            videosContainer.appendChild(createFavoriteCard(video, 'videos'));
        });
    }
    
    // Music
    const musicContainer = document.getElementById('music-container');
    if (musicContainer) {
        musicData.forEach(music => {
            musicContainer.appendChild(createFavoriteCard(music, 'music'));
        });
    }
    
    // Websites
    const websitesContainer = document.getElementById('websites-container');
    if (websitesContainer) {
        websitesData.forEach(website => {
            websitesContainer.appendChild(createFavoriteCard(website, 'websites'));
        });
    }
}

// Function to populate hobbies section
function populateHobbies() {
    const hobbiesContainer = document.getElementById('hobbies-container');
    if (!hobbiesContainer) return;
    
    hobbiesData.forEach(hobby => {
        const hobbyItem = document.createElement('div');
        hobbyItem.className = 'col-md-3 col-sm-6';
        hobbyItem.innerHTML = `
            <div class="hobby-item" data-aos="fade-up">
                <div class="hobby-icon">
                    <i class="${hobby.icon}"></i>
                </div>
                <h4>${hobby.title}</h4>
                <p>${hobby.description}</p>
            </div>
        `;
        hobbiesContainer.appendChild(hobbyItem);
    });
}

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just show an alert
            alert(`Merci ${name} pour votre message. Nous vous contacterons bientôt à ${email}.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
});

// Function to populate library section
function populateLibrary() {
    // Populate videos library
    const videosLibraryContainer = document.getElementById('videos-library-container');
    if (videosLibraryContainer) {
        videosData.forEach(video => {
            const videoCard = document.createElement('div');
            videoCard.className = 'col-md-4 mb-4';
            
            let videoAction = '';
            if (video.isLocal) {
                videoAction = `onclick="playMedia('${video.url}', 'videos')" href="javascript:void(0)"`;
            } else {
                videoAction = `href="${video.url}" target="_blank"`;
            }
            
            videoCard.innerHTML = `
                <div class="card h-100">
                    <img src="${video.thumbnail}" class="card-img-top" alt="${video.title}">
                    <div class="card-body">
                        <h5 class="card-title">${video.title}</h5>
                        <p class="card-text">${video.description}</p>
                        <a ${videoAction} class="btn btn-primary">
                            <i class="fas fa-play me-2"></i>Regarder
                        </a>
                    </div>
                </div>
            `;
            
            videosLibraryContainer.appendChild(videoCard);
        });
    }
    
    // Populate music library
    const musicLibraryContainer = document.getElementById('music-library-container');
    if (musicLibraryContainer) {
        musicData.forEach(music => {
            const musicCard = document.createElement('div');
            musicCard.className = 'col-md-4 mb-4';
            
            let musicAction = '';
            if (music.isLocal) {
                musicAction = `onclick="playMedia('${music.url}', 'music')" href="javascript:void(0)"`;
            } else {
                musicAction = `href="${music.url}" target="_blank"`;
            }
            
            musicCard.innerHTML = `
                <div class="card h-100">
                    <img src="${music.thumbnail}" class="card-img-top" alt="${music.title}">
                    <div class="card-body">
                        <h5 class="card-title">${music.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${music.artist}</h6>
                        <p class="card-text">${music.description}</p>
                        <a ${musicAction} class="btn btn-primary">
                            <i class="fas fa-music me-2"></i>Écouter
                        </a>
                    </div>
                </div>
            `;
            
            musicLibraryContainer.appendChild(musicCard);
        });
    }
}

// Initialize all data when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    populateCoursesTable();
    populateFavorites();
    populateHobbies();
    populateLibrary();
});
