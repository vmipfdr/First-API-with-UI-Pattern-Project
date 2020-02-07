// let testUrl = "https://api.nasa.gov/planetary/apod?api_key=IZ18AeSPTQ45xc8TWW2CsrdEO00gQcGvQJIejUZd"

// fetch(testUrl).then(res=>{
//     console.log('success', res)
// })

let opportunityBaseUrl = "https://mars-photos.herokuapp.com/api/v1/rovers/opportunity/photos?earth_date="
let curiosityBaseUrl = "https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?earth_date="


let baseUrl = "https://mars-photos.herokuapp.com/api/vi/rovers/"
let random = document.querySelector('.randomButton');
random.addEventListener('click', getMoreMars);
let randomMarsPic = document.querySelector('.randomMarsPic');

function randomDate(date1, date2){
    function randomValueBetween(min, max) {
      return Math.random() * (max - min) + min;
    }
    var date1 = date1 || '2016-01-01'
    var date2 = date2 || new Date().toLocaleDateString()
    date1 = new Date(date1).getTime()
    date2 = new Date(date2).getTime()
    if( date1>date2){
        return new Date(randomValueBetween(date2,date1)).toLocaleDateString()   
    } else{
        return new Date(randomValueBetween(date1, date2)).toLocaleDateString()  

    }
}

function getMoreOpportunity(e){
  e.preventDefault();
  fetch(opportunityBaseUrl, { headers: {
    'x-api-key' : "IZ18AeSPTQ45xc8TWW2CsrdEO00gQcGvQJIejUZd"
    }
  })
  .then(res => {
    return res.json();
  })
  .then(res => {
  	console.log(res)
    let marsImg = res.url
    randomMarsPic.setAttribute('src', marsImg)
    console.log("success");
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });
}

function getMoreCuriosity(e){
  e.preventDefault();
  fetch(curiosityBaseUrl, { headers: {
    'x-api-key' : "IZ18AeSPTQ45xc8TWW2CsrdEO00gQcGvQJIejUZd"
    }
  })
  .then(res => {
    return res.json();
  })
  .then(res => {
  	console.log(res)
    let marsImg = res.url
    randomMarsPic.setAttribute('src', marsImg)
    console.log("success");
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });
}















// IZ18AeSPTQ45xc8TWW2CsrdEO00gQcGvQJIejUZd

