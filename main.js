'use strict'

//make sure you declare all variables at the top of your file so they are accessible;
const joke = document.querySelector('.joke')
const button = document.querySelector('.btn')
const categoriesButton = document.querySelector('.btn-categories')
const randomJokeUrl = "https://api.chucknorris.io/jokes/random";
const categoriesOfJokes = 'https://api.chucknorris.io/jokes/categories'
let number = 10;
const testButton = document.querySelector('.test-btn')


// regular fetching function

// function fetchData() {
//     fetch(randomJokeUrl)
//         .then(response => response.json())
//         .then(data => {
//             joke.innerHTML = data.value;
//         })

// }



//async await //function declaration
async function fetchData() {
    //try catch helps javascript to catch any errors, and shows them on console

    try {
        const response = await fetch(randomJokeUrl);
        const data = await response.json();
        joke.innerHTML = data.value
        console.log(joke, 'these are jokes')

    } catch (err) {
        console.log(err)
    }

    //without try catch
    // const response = await fetch(randomJokeUrl);
    // const data = await response.json();
    // joke.innerHTML = data.value
}


//async await function expression 

// const fetchData = async() => {
//     try {
//         const response = await fetch(randomJokeUrl);
//         const data = await response.json();
//         joke.innerHTML = data.value
//         console.log(joke, 'these are jokes')

//     } catch (err) {
//         console.log(err)
//     }
// }



//fetching of categories
async function fetchCategory() {
    try {
        const categoriesResponse = await fetch(categoriesOfJokes);
        const categories = await categoriesResponse.json();
        console.log(categories, 'these are categories')
    } catch (err) {
        console.log(err)
    }
}


//click function
function btnClick() {
    console.log('clicked')
    fetchData()
}

//click function for categories button
function categoryClick() {
    console.log('clicked')
    fetchCategory();
}

//function expression
const randomFunc = () => {
    joke.innerHTML = 'test'
}
//this function immediately updates our P tag from html, since its being called right away
randomFunc();

// testing button //function expression
const testFunction = () => {
    console.log('test button is clicked')
}


categoriesButton.addEventListener('click', categoryClick)
button.addEventListener('click', btnClick)
testButton.addEventListener('click', testFunction)