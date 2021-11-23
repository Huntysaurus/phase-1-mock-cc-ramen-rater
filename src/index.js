// write your code here

const init = () => {
    fetch("http://localhost:3000/ramens")
    .then(res => res.json())
    .then(data => displayRamens(data))

    const form = document.getElementById('new-ramen')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const ramenObj = {}
        ramenObj.name = document.getElementById('new-name').value
        ramenObj.restaurant = document.getElementById('new-restaurant').value
        ramenObj.image = document.getElementById('new-image').value
        ramenObj.rating = document.getElementById('new-rating').value
        ramenObj.comment = document.getElementById('new-comment').value

        displayRamen(ramenObj)
     })
}

function displayRamen(ramen) {
    // grab element to add ramen images
    const ramenMenu = document.getElementById('ramen-menu')
    const image = document.createElement('img')
    image.src = ramen.image
    image.addEventListener('click',() => {
        document.querySelector('.detail-image').src = ramen.image
        document.querySelector('.name').innerHTML = ramen.name
        document.querySelector('.restaurant').innerHTML = ramen.restaurant
        document.querySelector('#rating-display').innerHTML = ramen.rating
        document.querySelector('#comment-display').innerHTML = ramen.comment
    })
    ramenMenu.appendChild(image)
}

function displayRamens(ramens) {
    ramens.forEach(ramen => {
        displayRamen(ramen)
    })
}

document.addEventListener("DOMContentLoaded", init)

