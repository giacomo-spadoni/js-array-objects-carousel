const images = [
    { image: 'img/01.webp', title: 'Marvel\'s Spiderman Miles Morales', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.' },
    { image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.' },
    { image: 'img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos." },
    { image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city' },
    { image: 'img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.' }
];

// creo le variabili che selezionano gli elementi del DOM
const section = document.getElementById('carousel')
const upButton = document.getElementById('up')
const downButton = document.getElementById('down')
const togglePlay = document.getElementById('play')
let play = false
let autoPlay

// creo la variabile a cui appoggiare gli indici dell'array
let i = 0

// inserisco nell'HTML la prima immagine con descrizioni
imgCarousel(images[i].image, images[i].title, images[i].text)

// creo l'evento per il bottone giù
downButton.addEventListener('click', function () {
    i++
    if (i >= images.length) {
        i = 0
    }
    imgCarousel(images[i].image, images[i].title, images[i].text)
})

// creo l'evento per il bottone su
upButton.addEventListener('click', function () {
    if (i == 0) {
        i = images.length - 1
    } else {
        i--
    }
    imgCarousel(images[i].image, images[i].title, images[i].text)
})

togglePlay.addEventListener('click', function () {
    if (play == false) {
        play = true
        togglePlay.innerHTML = 'STOP'
        autoPlay = setInterval(function () {
            i++
            if (i >= images.length) {
                i = 0
            }
            imgCarousel(images[i].image, images[i].title, images[i].text)
        }, 3000)
    } else {
        play = false
        togglePlay.innerHTML = 'PLAY'
        clearInterval(autoPlay)
    }
})


// creo la funzione che mi inserisce nella section l'immagine con le descrizioni in base all'indice dell'array [i]
function imgCarousel(img, tit, tex) {
    return section.innerHTML = `<img class='image' src='${img}'>
    <div class='title'>${tit}</div>
    <div class='text'>${tex}</div>`
}