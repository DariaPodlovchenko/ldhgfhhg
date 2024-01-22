// Initialisation des indices pour 2 conteneurs
var slideIndex = {
    'slideshow-container1': 1,
    'slideshow-container2': 1
};

// Affichage des conteneurs 1 et 2
showSlides('slideshow-container1', slideIndex['slideshow-container1']);
showSlides('slideshow-container2', slideIndex['slideshow-container2']);

// Fonction pour changer les photos " < " et " > "
function plusSlides(containerId, n) {
    showSlides(containerId, (slideIndex[containerId] += n));
}

// Afficher des photos pour un des conteneurs
function showSlides(containerId, n) { // Récupération des éléments pour un des conteneurs
    var i;
    var slides = document.getElementById(containerId).getElementsByClassName("slide");
    var totalSlides = slides.length;

    // Conditions pour ne dépasser pas la plage autorisée
    if (n > totalSlides) {
      slideIndex[containerId] = 1;
    }
    if (n < 1) {
      slideIndex[containerId] = totalSlides;
    }

    // Pour cacher tous les slides
    for (i = 0; i < totalSlides; i++) {
      slides[i].style.display = "none";
    }

    // Pour afficher de la photo actuelle
    slides[slideIndex[containerId] - 1].style.display = "block";
}

// La carte interactive - Leaflet
var map = L.map('map').setView([68.9707, 33.0749], 13); // Les coordonnées du port maritime de Mourmansk

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { // La couche OpenStreetMap à la carte
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  var portMarker = L.marker([68.9728, 33.0825]).addTo(map) // Un marqueur sur la carte
    .bindPopup('<b>Le port maritime de Mourmansk</b><br>La ville de Mourmansk')
    .openPopup();