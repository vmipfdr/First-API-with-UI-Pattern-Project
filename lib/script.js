// let testUrl = "https://api.nasa.gov/planetary/apod?api_key=IZ18AeSPTQ45xc8TWW2CsrdEO00gQcGvQJIejUZd"

// fetch(testUrl).then(res=>{
//     console.log('success', res)
// })

let baseUrl = "https://api.nasa.gov/planetary/apod?api_key=IZ18AeSPTQ45xc8TWW2CsrdEO00gQcGvQJIejUZd"
let random = document.querySelector('.randomButton');
random.addEventListener('click', getMoreMars);
let randomMarsPic = document.querySelector('.randomMarsPic');

function getMoreMars(e){
  e.preventDefault();
  fetch(baseUrl).then(res => {
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