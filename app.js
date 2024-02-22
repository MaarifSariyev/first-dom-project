const cardColor = document.getElementById("box");
const header = document.getElementById("h1");
const cardTitle = document.getElementById("h2");
const button = document.getElementById("button");
const container = document.getElementById("container")
const text = document.getElementById("p")
console.log(button);

let min = 0;
let max = 65536;
let changableColor =  function (min, max){
    const randNum ="#" + Math.round(Math.random() * (max - min)+min)*String(16);
    hsdd = randNum.toString(16)
    return hsdd;
}               

function maarif() {
   
   cardColor.style.backgroundColor = changableColor(min,max);
    header.style.color = changableColor(min,max);
    cardTitle.style.color = changableColor(min,max);
    button.style.backgroundColor =  changableColor(min,max);
    text.style.color = changableColor(min,max); 
    cardTitle.textContent = "Coders"
    text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum fuga dicta consequatur nemo officia quis libero sunt, cum rem nesciunt impedit officiis aperiam corporis exercitationem? Libero possimus beatae deleniti!"
  
}

button.addEventListener("click",maarif)

