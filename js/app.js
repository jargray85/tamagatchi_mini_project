console.log("Working")

// changing the opening dialogue to add player name
let dialogue = document.querySelector("h3")
// let name = prompt("Greetings Master. May I call you a name?")
// dialogue.innerText = "Greetings " + `${name}` + ". Lets be friends and gain ultimate knowledge!"

let knowledge = document.querySelector(".data-score")
let encryption = document.querySelector(".debug-score")
let networking = document.querySelector(".network-score")

// setting game time intervals and counters
// game timer
let gameTimer = document.querySelector(".time-left")
let startTime = 60;

// TIMERS AND SCORE COUNTER DEDUCTIONS

// add functionality to timer
const countDown = setInterval (() => {
    gameTimer.innerHTML = startTime;
    startTime--;
    if(startTime <= 0) {
        clearInterval(countDown);
    }
}, 1000)

// Data Intake Score deduction timer

const feedTimer = setInterval(() => {
    knowledge.innerHTML--;
    if(knowledge.innerHTML <= 0) {
        clearInterval(feedTimer);
    }
}, 6000)  
// feedTimer()

// Debub score deduction timer

const debugTimer = setInterval(() => {
    encryption.innerHTML--;
    if(encryption.innerHTML <= 0) {
        clearInterval(debugTimer)
    }
}, 10000)

// Network score deduction timer

// debugTimer()
const networkTimer = setInterval(() => {
    networking.innerHTML--;
    if(networking.innerHTML <= 0) {
        clearInterval(networkTimer)
    }
}, 15000)

// declare buttons
// let buttons = document.getElementsByClassName(".buttons")
let feedButton = document.querySelector(".feed")
let debugButton = document.querySelector(".debug")
let talkButton = document.querySelector(".talk")

// add functionality to counters
function updateData() {
    knowledge.innerHTML++
}

function updateEncryption() {
    encryption.innerHTML++ 
}

function updateNetworking() {
    networking.innerHTML++
}

// add media to button clicks (change gif momentarily upon click, and back again)
function knowledgeIntake () {
    let knowComp = document.querySelector(".normal-comp") 
    knowComp.src = "assets/animated-computer-image-0028.gif"
}

function debugIntake () {
    let debugComp = document.querySelector(".normal-comp")
    debugComp.src = "assets/animated-computer-image-0147.gif";
}

function networkIntake () {
    let networkComp = document.querySelector(".normal-comp")
    networkComp.src = "assets/animated-computer-image-0040.gif"
}

function returnToNormal () {
    let normalComp = document.querySelector(".normal-comp");
    normalComp.src = "assets/animated-computer-image-0178.gif";
}

// make functions to reduce 

// final button actions
feedButton.addEventListener("click", () => {
    knowledgeIntake();
    updateData();
    dialogue.innerText = "Yum! More Knowledge!"
})


debugButton.addEventListener("click", () => {
    debugIntake();
    updateEncryption();
    dialogue.innerText = "Thank you for cleaning my files!"
})


talkButton.addEventListener("click", () => {
    networkIntake();
    updateNetworking();
    dialogue.innerText = "I shall share my findings with... friends.."
})

// End Game scenario
// function endGame () {
//     if() {}
// }