const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
document.querySelector("h1").onmouseover = event => {
 let iterations = 0;
    let interval =  setInterval(() =>{
    event.target.innerText = event.target.innerText.split("") 
    .map((letter, index) => {
        if (index < iterations) {
            return event.target.dataset.value[index]} 

        return letters[Math.floor(Math.random() * 26)]})
        
        .join("")
    
    if(iterations >= event.target.dataset.value.length){
     clearInterval(interval);
    }
    iterations += 1 /3;
},30);
}

 x = document.getElementById("h1").onclick(getLocation())

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    } 
}    
function showPosition(position){
    console.log("Latitude: " + position.coords.latitude);
    console.log("longitude: " + position.coords.longitude)
} 

