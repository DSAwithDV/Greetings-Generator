let button = document.getElementById("greetBtn");
button.addEventListener("click",generateGreeting);
function generateGreeting(){
let name = document.getElementById("nameInput").value;
let result = document.getElementById("result");

if(name.trim()===""){
result.innerText ="Please enter your name!";
return ;}



let greetings = [
    `Hello ${name}! Have a wonderful day 🌞`,
    `Welcome ${name}! Keep smiling 😊`,
    `Good to see you today ${name} 👋`,
    `Hope you're having an amazing day ${name} 🚀`,
    `Keep learning and growing ${name} 📚`,
    `You can achieve great things today ${name} 💪`,
    `Stay positive and stay focused ${name} ✨`,
    `Believe in yourself and keep moving forward ${name} 🌟`,
    `Success starts with small steps ${name} 👣`,
    `Every day is a new opportunity ${name} 🌅`,
    `Keep pushing towards your goals ${name} 🎯`,
    `Your hard work will pay off one day ${name} 🏆`,
    `Never stop improving yourself ${name} 🔥`,
    `Make today productive and meaningful ${name} 💻`,
    `Stay motivated and enjoy the journey ${name} 😎`
];

let randomIndex = Math.floor(Math.random()*greetings.length);
result.innerText = greetings[randomIndex];}