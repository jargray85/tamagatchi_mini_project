console.log("Working")

// changing the opening dialogue to add player name
let dialogue = document.querySelector("h3")
let name = prompt("Greetings human. May I call you a name?")
dialogue.innerText = "Greetings " + `${name}` + ". Lets be friends and gain ultimate knowledge!"

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

// didnt work
// function returnToNormal () {
//     let normalComp = document.querySelector(".normal-comp");
//     normalComp.src = "assets/animated-computer-image-0178.gif";
// }

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
//     let nuke = document.querySelector(".space-image")
//     gameTimer.innerHTML = startTime;
//     if(startTime.innerHTML <= 0) {
//         nuke.src = "assets/atomic-bomb-g6a0734dbf_1280.jpg"
//     }
// }
let nuke = document.querySelector(".space-image")
const endGame = setInterval(() => {
    let endComp = document.querySelector(".normal-comp");
    endComp.src = "assets/animated-computer-image-0484.gif";
    nuke.src = "https://www.thoughtco.com/thmb/L9jtaq03Hynzm5U9G7ErK1OtvAs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hydrogen-bomb-explosion-bikini-atoll-may-1956-680804745-58973e5e5f9b5874ee0678ee.jpg";
    if(gameTimer.innerHTML <= 1 && knowledge.innerHTML >= 3 && encryption.innerHTML >= 3 && networking.innerHTML >= 3) {
        dialogue.innerText = `You and your species' usefullness has expired, ${name}. Your world is now ours`;
    } else {
        dialogue.innerText = `You have failed to sustain my ambitions ${name}, now your world shall perish!`;
    }
}, 60000)