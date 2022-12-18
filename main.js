let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.486558, lng: -0.389062 },
    zoom: 15,
  });

  const marker = new google.maps.Marker({
    position: { lat: 39.486558, lng: -0.389062 },
    map: map,
  });
}

window.initMap = initMap;

//navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  navbar.classList.remove('active');
}

// scrollreveal
const sr = ScrollReveal();
sr.reveal('.main-text--h3, .menu-name', {
  origin: 'top',
  distance: '40px',
  duration: 2000,
  reset: true
})

sr.reveal('#foto, .menu-label', {
  origin: 'top',
  distance: '20px',
  duration: 1000,
  reset: true
})