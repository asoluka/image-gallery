const imageUrls = [
  './images/view-1.jpg',
  './images/view-2.jpg',
  './images/view-3.jpg',
  './images/view-4.jpg',
  './images/view-5.jpg',
]

// function to generate random number.. NB: We won't need this in our actual implimentation.
const randomNum = ( maxValue ) => Math.floor(Math.random() * maxValue)

// currentImageTracker 
let imageCounter = 0
const increaseCounter = () => {
  if(imageCounter === imageUrls.length - 1){
    imageCounter = 0
  } else {
    imageCounter = imageCounter + 1
  }
}

const decreaseCounter = () => {
  if(imageCounter === 0){
    imageCounter = imageUrls.length - 1
  } else {
    imageCounter = imageCounter - 1
  }
}

// Normal Images view
const mainView = document.querySelector('.item-1')
const views = document.querySelectorAll('[class*="item-"]:not(:last-child)')
const lastView = document.querySelector('[class*="item-"]:last-child')
const lastItemOverlay = document.querySelector('#more-items')

// Gallery Modal
const imageGallery = document.querySelector('.image-gallery')
const galleryShowcaseArea = document.querySelector('.showcase-area')
const closeGalleryButton = document.querySelector('.close-gallery-button')
const nextButton = document.querySelector('.next')
const prevButton = document.querySelector('.prev')

lastView.style.backgroundImage = `url('${imageUrls.slice(-1)}')`
lastItemOverlay.classList.add('more-items')

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    views.forEach((currentDiv, index) => {
      currentDiv.style.backgroundImage = `url('${imageUrls[index]}')`

      currentDiv.addEventListener('click', () => {
        mainView.style.backgroundImage = `url('${imageUrls[index]}')`
      })
    })
    
    lastView.addEventListener('click', () => imageGallery.style.display = "flex")
    galleryShowcaseArea.style.backgroundImage = `url('${imageUrls[imageCounter]}')`

    nextButton.addEventListener('click', () => {
      increaseCounter()
      console.log(imageCounter)
      galleryShowcaseArea.style.backgroundImage = `url('${imageUrls[imageCounter]}')`
    })

    prevButton.addEventListener('click', () => {
      decreaseCounter()
      console.log(imageCounter)
      galleryShowcaseArea.style.backgroundImage = `url('${imageUrls[imageCounter]}')`
    })

    closeGalleryButton.addEventListener('click', () => imageGallery.style.display = "none")
  }
}