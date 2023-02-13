let homeScorePoints = document.getElementById("homeScore")

let homeScoreCount = 0
function plus1() {
    homeScoreCount += 1
    homeScorePoints.textContent = homeScoreCount 
}

function plus2() {
    homeScoreCount += 2
    homeScorePoints.textContent = homeScoreCount 
}

function plus3() {
    homeScoreCount += 3
    homeScorePoints.textContent = homeScoreCount 
}

let guestScorePoints = document.getElementById("guestScore")

let guestScoreCount = 0 

function plus1Guest() {
    guestScoreCount += 1
    guestScorePoints.textContent = guestScoreCount 
}

function plus2Guest() {
    guestScoreCount += 2
    guestScorePoints.textContent = guestScoreCount 
}

function plus3Guest() {
    guestScoreCount += 3
    guestScorePoints.textContent = guestScoreCount 
}

let resetScoreBoard = document.getElementById("resetBtn")
console.log(resetScoreBoard)

function resetScores(){
    guestScorePoints.textContent = 0;
    homeScorePoints.textContent = 0;
    guestScoreCount = 0;
    homeScoreCount = 0;
}