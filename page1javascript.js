// Initialisation des variables pour les photos
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
    
// Fonction pour afficher une photo selon son numéro
function showSlide(n) {
    slides.forEach(slide => slide.style.display = 'none'); // Masquer toutes les photos
    slides[n].style.display = 'block'; // Afficher une photo sélectionnée
}
    
// Fonction pour passer à la photo suivante
function nextSlide() {
    currentSlide++;
        if (currentSlide >= slides.length) {  // Si la fin de la liste des photos -> retourner à la start 
            currentSlide = 0;
            }
    showSlide(currentSlide); // La photo actuelle
} 
    
setInterval(nextSlide, 5000); // Changement automatique des photos chaque 5 sec

// Fonction pour une fenêtre modale pour afficher les videos
function showVideo(videoId) {
        let videoUrl;
            if (videoId === 'video1') {
                videoUrl = "https://www.youtube.com/embed/JOq5e9oGqrI";
            } else if (videoId === 'video2') {
                videoUrl = "https://www.youtube.com/embed/l9fAt8x64aE";
            }
        
    document.getElementById('videoIframe').src = videoUrl; // Définition du src pour la fenêtre modale
    document.getElementById('videoModal').style.display = 'block';
}
        
// Fonction pour fermer la fenêtre modale
function closeModal() {
    document.getElementById('videoIframe').src = '';
    document.getElementById('videoModal').style.display = 'none';
}