// let testUrl = "https://api.nasa.gov/planetary/apod?api_key=IZ18AeSPTQ45xc8TWW2CsrdEO00gQcGvQJIejUZd"

// fetch(testUrl).then(res=>{
//     console.log('success', res)
// })

let opportunityBaseUrl = "https://mars-photos.herokuapp.com/api/v1/rovers/opportunity/photos?earth_date="
let curiosityBaseUrl = "https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?earth_date="

let randomOpp = document.querySelector('.randomOpportunityButton');
randomOpp.addEventListener('click', getMoreOpportunity);
let randomCur = document.querySelector('.randomCuriosityButton');
randomCur.addEventListener('click', getMoreCuriosity);
let randomMarsPic = document.querySelector('.randomMarsPic');
let opportunityUrl = opportunityBaseUrl + randomDate();
let curiosityUrl = curiosityBaseUrl + randomDate();


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
// console.log(today);
var date1 = '2015-01-01';

function randomDate(date1, today){
    function randomValueBetween(min, max) {
      return Math.random() * (max - min) + min;
    }
    var date1 = '2015-01-01'
    var date2 = date2 || new Date().toISOString().split('T')[0]
    date1 = new Date(date1).getTime()
    date2 = new Date(date2).getTime()
    if(date1>date2){
        return new Date(randomValueBetween(date2, date1)).toISOString().split('T')[0]   
    } else{
        return new Date(randomValueBetween(date1, date2)).toISOString().split('T')[0] 
    }
}

function getMoreOpportunity(e){
  e.preventDefault();
  fetch(opportunityUrl, { headers: {
    'x-api-key' : "IZ18AeSPTQ45xc8TWW2CsrdEO00gQcGvQJIejUZd"
    }
  })
  .then(res => {
    return res.json();
  })
  .then(res => {
  	console.log(res)
    let marsImg = res.photos[0].img_src
    randomMarsPic.setAttribute('src', marsImg)
    console.log("success");
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });
}

function getMoreCuriosity(e){
  e.preventDefault();
  fetch(curiosityUrl, { headers: {
    'x-api-key' : "IZ18AeSPTQ45xc8TWW2CsrdEO00gQcGvQJIejUZd"
    }
  })
  .then(res => {
    return res.json();
  })
  .then(res => {
  	console.log(res)
    let marsImg = res.photos[0].img_src
    randomMarsPic.setAttribute('src', marsImg)
    console.log("success");
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });
}

// url =""
// let form = document.getElementById("form");
// let baseUrl="https://pokeapi.co/api/v2/pokemon/";
// form.addEventListener("submit", pokemonNameFinder);
// function pokemonNameFinder(e){
//   e.preventDefault();
//   let enteredNumber=document.getElementById("pNumber");
//   let searchNumber=enteredNumber.value;
//   console.log(searchNumber);
//   let url=baseUrl+searchNumber+"/"
//   fetch(url).then(res => {
//     return res.json();
//   })
//   .then(res => {
//     console.log("The name is: "+ res.forms[0].name);
//   })
//   .catch(err => {
//     console.log("something went wrong...", err);
//   });
// }













// IZ18AeSPTQ45xc8TWW2CsrdEO00gQcGvQJIejUZd

