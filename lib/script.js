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
// let loadText = document.querySelector('guidanceText');
// loadText.
// let loadImage = document.querySelector('.randomMarsPic');
// loadImage.addEventListener('load', ;

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
// console.log(today);
var date1 = '2015-01-01';

// add a for loop with the outer loop calling for the initial call function
// add an inner loop that goes through and grabs different objects in the array (from the call) for 15 times
// make two for loops one for each side
// make a base image that is there when no buttons are clicked that explaines what's going on

for (let i = 0; i <=1; i++) {
	getMoreOpportunity();
	for (let j = 0; j <= 20; j++) {
	 let opportunityImg = res.photos[j].img_src
    randomMarsPic.setAttribute('src', opportunityImg)
	}
}

for (let i = 0; i <=1; i++) {
	getMoreCuriosity();
	for (let j = 0; j <= 20; j++) {
	 let curiosityImg = res.photos[j].img_src
    randomMarsPic.setAttribute('src', curiosityImg)
	}
}


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
  let opportunityUrl = opportunityBaseUrl + randomDate();
  fetch(opportunityUrl, { headers: {
    'x-api-key' : "IZ18AeSPTQ45xc8TWW2CsrdEO00gQcGvQJIejUZd"
    }
  })
  .then(res => {
    return res.json();
  })
  .then(res => {
  	console.log(res)
    let opportunityImg = res.photos[0].img_src
    randomMarsPic.setAttribute('src', opportunityImg)
    // let marsText = res.photos[0].earth_date
    // opportunityText.setAttribute(marsText.innerText)
    console.log("success", opportunityImg);
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });
}

function getMoreCuriosity(e){
  e.preventDefault();
  let curiosityUrl = curiosityBaseUrl + randomDate();
  fetch(curiosityUrl, { headers: {
    'x-api-key' : "IZ18AeSPTQ45xc8TWW2CsrdEO00gQcGvQJIejUZd"
    }
  })
  .then(res => {
    return res.json();
  })
  .then(res => {
  	console.log(res)
    let curiosityImg = res.photos[0].img_src
    randomMarsPic.setAttribute('src', curiosityImg)
    // let marsText = res.photos[0].earth_date
    // curiosityText.setAttribute(marsText.innerText)
    console.log("success", curiosityImg);
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });
}



// IZ18AeSPTQ45xc8TWW2CsrdEO00gQcGvQJIejUZd

