const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const IMG_WIDTH = 400

const slideContainer= $('.slides')  

const slideImages= [... $$('.slide')]

slideContainer.style.width = `${slideImages.length * IMG_WIDTH}px `

let index = 0

function next() {
    if (index <slideImages.length -1 ){

        index++
    } else{
        index=0
    }

    slideContainer.style.transform = `translateX(-${IMG_WIDTH * index}px)`
}

function prev() {
    if (index ===0 ){

       index = slideImages.length -1
    } else{
        index--
    }

    slideContainer.style.transform = `translateX(-${IMG_WIDTH * index}px)`
}


$('#prev').addEventListener('click', () => {
    prev()
})

$('#next').addEventListener('click', () => {
    next()
})

