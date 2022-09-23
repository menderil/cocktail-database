document.querySelector('button').addEventListener('click', getDrink)
//result input locations for easier access
let nameResult = document.querySelector('#nameResult')
let imageResult = document.querySelector('#imgResult')
let instructionResult = document.querySelector('#instResult')

function getDrink(){
    //grabs the input from the search bar
    //replaces spaces with an underscore to fit the API url format
    let searchInput = document.querySelector('input').value.split(' ').join('_');

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`)
        .then(res => res.json())  //parses response as JSON
        .then(data => { //data is the response object
            console.log(data)
            //insert the data recieved from the API into the HTML elements
            nameResult.innerText = data.drinks[0].strDrink
            imageResult.src = data.drinks[0].strDrinkThumb
            instructionResult.innerText = data.drinks[0].strInstructions
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
}