// ! Consegna
// Dato un array di oggetti letterali con:
// - url dell’immagine
// - titolo
// - descrizione
// Creare un carosello ispirandosi alla foto allegata.
// Potete anche usare come base il carosello dell'esercizio precedente

// ! Milstone 0:
// Come nel primo carosello realizzato,
// focalizziamoci prima sulla creazione del markup statico:
// costruiamo il container e inseriamo l’immagine grande
// in modo da poter stilare lo slider.

// ! Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali
// per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce verso sinistra o destra,
// l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// ! Milestone 2:
// Aggiungere il ciclo infinito del carosello.
// Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra,
// la miniatura che deve attivarsi sarà l’ultima
// viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.



// ! BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura)
// ed al click attivare l’immagine corrispondente.

// ! BONUS 2:
// Aggiungere funzionalità di autoplay:
// dopo un certo periodo di tempo (3 secondi)
// l’immagine attiva dovrà cambiare alla successiva.

// ! BONUS 3:
// Aggiungere bottoni di start/stop
// e di inversione del meccanismo di autoplay


const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
];

const galleryElement = document.getElementById("gallery");
const thumbnailElement = document.getElementById("thumbnail");
const prevButtonElement = document.getElementById("prev");
const nextButtonElement = document.getElementById("next");

const imagesUrls = images.map(image => image.url);
const imagesTitles = images.map(image => image.title);
const imagesDescriptions = images.map(image => image.description);

for (let i = 0; i < imagesUrls.length; i++) {
    galleryElement.innerHTML += `
    <img src="${imagesUrls[i]}" class="item">
    <figcaption class="caption">
        <h2>${imagesTitles[i]}</h2 >
        <p>${imagesDescriptions[i]}</p>
    </figcaption> 
    `}

for (let i = 0; i < imagesUrls.length; i++) {
    thumbnailElement.innerHTML += `
        <img src="${imagesUrls[i]}" class="thumb">    
        `}

// definisco la variabile per prendere la posizione all'interno dell'array
let activeIndex = 0;
// prendo gli elementi con classe "item" all interno del div gallery
const galleryImages = document.getElementsByClassName("item");
const imagesCaption = document.getElementsByClassName("caption");
const thumbnailImage = document.getElementsByClassName("thumb");

// aggiungo la classe "active" con "display: block" agli elementi all'interno di gallery
galleryImages[activeIndex].classList.add("active");
imagesCaption[activeIndex].classList.add("active");
thumbnailImage[activeIndex].classList.add("active");


// aggiungo l'eventlistener al bottone next
nextButtonElement.addEventListener('click', function () {
    // rimuovo la classe "active"
    galleryImages[activeIndex].classList.remove("active");
    imagesCaption[activeIndex].classList.remove("active");
    thumbnailImage[activeIndex].classList.remove("active");
    // incremento il valore per prendere la prossima posizione nell array
    activeIndex++;

    //! verifico che le immagini non siano finite e se lo sono ricomincio
    if (activeIndex >= images.length) {
        activeIndex = 0;
    }

    // assegno al nuovo elemento la classe "active"
    galleryImages[activeIndex].classList.add("active");
    imagesCaption[activeIndex].classList.add("active");
    thumbnailImage[activeIndex].classList.add("active");
});


// aggiungo l'eventlistener al bottone prev
prevButtonElement.addEventListener('click', function () {
    // rimuovo la classe "active"
    galleryImages[activeIndex].classList.remove("active");
    imagesCaption[activeIndex].classList.remove("active");
    // diminuisco il valore per prendere la posizione precedente nell' array
    activeIndex--;


    //! quando arrivo alla prima immagine ricomincio dall'ultima
    if (activeIndex < 0) {
        activeIndex = images.length - 1;
        console.log(activeIndex)
    }

    // assegno al nuovo elemento la classe "active"
    galleryImages[activeIndex].classList.add("active");
    imagesCaption[activeIndex].classList.add("active");
});


setInterval(function () {
    galleryImages[activeIndex].classList.remove("active");
    imagesCaption[activeIndex].classList.remove("active");
    thumbnailImage[activeIndex].classList.remove("active");
    // incremento il valore per prendere la prossima posizione nell array
    activeIndex++;

    //! verifico che le immagini non siano finite e se lo sono ricomincio
    if (activeIndex >= images.length) {
        activeIndex = 0;
    }

    // assegno al nuovo elemento la classe "active"
    galleryImages[activeIndex].classList.add("active");
    imagesCaption[activeIndex].classList.add("active");
    thumbnailImage[activeIndex].classList.add("active");
}, 3000);





