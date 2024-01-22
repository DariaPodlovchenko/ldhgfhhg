// Sélection des pays, des régions, de la route maritime du nord (pass), du cercle artique (ca) et de capitales
const pays = document.querySelectorAll('.pays');
const region = document.querySelectorAll('.region');
const pass = document.querySelectorAll('.pass');
const ca = document.querySelectorAll('.ca');
const capital = document.querySelectorAll('.capital');

// Sélection des popups
const popupBg = document.querySelector('.info__bg');
const popup__photo = document.querySelector('.info__photo');
const popup__title = document.querySelector('.info__title');
const popup__text = document.querySelector('.info__text');


// Afficher les informations dans la fenêtre modale (au clic sur un des pays / regions / pass / ca / capitales)
pays.forEach((item) => {
    item.addEventListener('click', function() {
        popup__title.textContent = this.getAttribute('data-title');
        popup__photo.setAttribute('src', this.getAttribute('data-photo'));
        popup__text.textContent = this.getAttribute('data-text');
        popupBg.classList.add('active');
    });
});

region.forEach((item) => {
    item.addEventListener('click', function() {
        popup__title.textContent = this.getAttribute('data-title');
        popup__photo.setAttribute('src', this.getAttribute('data-photo'));
        popup__text.textContent = this.getAttribute('data-text');
        popupBg.classList.add('active');
    });
});


pass.forEach((item) => {
    item.addEventListener('click', function() {
        popup__title.textContent = this.getAttribute('data-title');
        popup__photo.setAttribute('src', this.getAttribute('data-photo'));
        popup__text.textContent = this.getAttribute('data-text');
        popupBg.classList.add('active');
    });
});

ca.forEach((item) => {
    item.addEventListener('click', function() {
        popup__title.textContent = this.getAttribute('data-title');
        popup__photo.setAttribute('src', this.getAttribute('data-photo'));
        popup__text.textContent = this.getAttribute('data-text');
        popupBg.classList.add('active');
    });
}); 

capital.forEach((item) => {
    item.addEventListener('click', function() {
        popup__title.textContent = this.getAttribute('data-title');
        popup__photo.setAttribute('src', this.getAttribute('data-photo'));
        popup__text.textContent = this.getAttribute('data-text');
        popupBg.classList.add('active'); 
    });
});

// Fermer la fenêtre modale en cliquant en dehors d'elle
document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
    }
});