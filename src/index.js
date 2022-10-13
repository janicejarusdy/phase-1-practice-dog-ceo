console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
.then(res => res.json())
.then(({message}) => addImage(message))

function addImage(message) {
    const main = document.querySelector('div');
    message.forEach(url => {
        main.innerHTML += `<img src = ${url}>`   
    }
    )   
}

dogsArray = []

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)
.then( res => res.json())
.then(({message}) => addBreed(message))


const ul = document.querySelector('ul')

function addBreed(message) {
    for (let dog in message) {
        const li = document.createElement('li')
        li.innerHTML = dog
        li.addEventListener('click',
            (event) => event.target.style.color= 'red'
        )

        ul.appendChild(li)
        dogsArray.push(dog)
    }
}


const breed = document.querySelector('#breed-dropdown')

breed.addEventListener('change', 
    (event) => filterValue(event)
) 

function filterValue(event) {

    ul.innerHTML = ''

    const result = dogsArray.filter(dog => dog[0] === breed.value)
    
    result.forEach(dog => {
        const li = document.createElement('li')
        li.innerHTML= dog
        li.addEventListener('click',
            (event) => event.target.style.color= 'red'
        )
        ul.appendChild(li)
    }) 
    
}