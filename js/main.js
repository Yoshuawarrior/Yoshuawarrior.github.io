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
        name: 'Réseaux Informatiques',
        description: 'Étude des principes fondamentaux des réseaux informatiques, protocoles et architecture.'
    },
    {
        id: 2,
        name: 'Télécommunications',
        description: 'Principes de base des systèmes de télécommunication, transmission de données et signaux.'
    },
    {
        id: 3,
        name: 'Programmation Web',
        description: 'Développement de sites web avec HTML, CSS et JavaScript.'
    },
    {
        id: 4,
        name: 'Systèmes Embarqués',
        description: 'Conception et programmation de systèmes embarqués pour diverses applications.'
    },
    {
        id: 5,
        name: 'Sécurité Informatique',
        description: 'Protection des systèmes d\'information contre les menaces et vulnérabilités.'
    }
];

// Favorite videos data
const videosData = [
    {
        id: 1,
        title: 'Amazing Grace',
        thumbnail: 'https://img.youtube.com/vi/CDdvReNKKuk/maxresdefault.jpg',
        description: 'Une interprétation puissante de "Amazing Grace"',
        url: '#'
    },
    {
        id: 2,
        title: 'Motivation',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        description: 'Vidéo motivante pour les moments difficiles',
        url: '#'
    },
    {
        id: 3,
        title: 'Contre le racisme',
        thumbnail: 'https://img.youtube.com/vi/1I9ADpXbD6c/maxresdefault.jpg',
        description: 'Un avocat détruit le racisme avec des arguments percutants',
        url: '#'
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
        url: '#'
    },
    {
        id: 2,
        title: 'Seigneur Je crois en toi',
        artist: 'Divine Mosaka',
        thumbnail: 'https://img.youtube.com/vi/9Y3xgQfPHcI/maxresdefault.jpg',
        description: 'Une belle interprétation par Divine Mosaka',
        url: '#'
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
        row.innerHTML = `
            <th scope="row">${course.id}</th>
            <td>${course.name}</td>
            <td>${course.description}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to create card for favorites (videos, music, websites)
function createFavoriteCard(item, type) {
    const card = document.createElement('div');
    card.className = 'col-md-4 favorite-item';
    
    card.innerHTML = `
        <div class="card">
            <img src="${item.thumbnail}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                ${type === 'music' ? `<h6 class="card-subtitle mb-2 text-muted">${item.artist}</h6>` : ''}
                <p class="card-text">${item.description}</p>
                <a href="${item.url}" class="btn btn-primary" target="_blank">
                    ${type === 'videos' ? 'Regarder' : type === 'music' ? 'Écouter' : 'Visiter'}
                </a>
            </div>
        </div>
    `;
    
    return card;
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

// Initialize all data when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    populateCoursesTable();
    populateFavorites();
    populateHobbies();
});
