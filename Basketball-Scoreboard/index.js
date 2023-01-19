// Let; play with code

let homeScoreEl = document.getElementById("home-points");
let guestScoreEl = document.getElementById("guest-points");
let teamLead = document.getElementById("leadingTeam");
let homeCounter = 0;
let guestCounter = 0;

//Functions For Home Counter

function homeAdd1() {
  homeCounter += 1;
  homeScoreEl.textContent = homeCounter;
  leadingScoreTeam();
}
function homeAdd2() {
  homeCounter += 2;
  homeScoreEl.textContent = homeCounter;
  leadingScoreTeam();
}
function homeAdd3() {
  homeCounter += 3;
  homeScoreEl.textContent = homeCounter;
  leadingScoreTeam();
}

// Functions for Guest Counter

function guestAdd1() {
  guestCounter += 1;
  guestScoreEl.textContent = guestCounter;
  leadingScoreTeam();
}
function guestAdd2() {
  guestCounter += 2;
  guestScoreEl.textContent = guestCounter;
  leadingScoreTeam();
}
function guestAdd3() {
  guestCounter += 3;
  guestScoreEl.textContent = guestCounter;
  leadingScoreTeam();
}
// Function for new game button
function newGame() {
  homeCounter = 0;
  guestCounter = 0;

  homeScoreEl.textContent = homeCounter;
  guestScoreEl.textContent = guestCounter;
  leadingScoreTeam();
}
// Leading Game
function leadingScoreTeam() {
  if (homeCounter > guestCounter) {
    teamLead.textContent = "Team one is leading...";
  } else if (homeCounter == guestCounter) {
    teamLead.textContent = "Both have same score!";
  } else {
    teamLead.textContent = "Team two is leading...";
  }
}
