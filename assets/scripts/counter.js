let chosenTime = null;
let goChecked = false;
let stopChecked = false;
const time = {
  h: 0,
  m: 0,
  s: 0,
};

const counter = () => {
  if (goChecked === true) {
    countdownDisplay.innerHTML = `
    ${time.h}<span class="yellow-colon">h </span>
    ${time.m}<span class="yellow-colon">m </span>
    ${time.s}<span class="yellow-colon">s </span>
    `;
    if (time.s === 0 && time.m === 0 && time.h === 0) return;
    else if (time.s === 0) {
      time.s = 60;
      if (time.m !== 0) time.m--;
      else if (time.m === 0 && time.h > 0) {
        time.m = 59;
        if (time.h > 0) time.h--;
      }
    }

    time.s--;

    setTimeout(counter, 1000);
  }
};

// --------------------------------------------------------------------------
// ----------------------------------HAMBURGER-------------------------------
// --------------------------------------------------------------------------

hamburgerContainer.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("toggleHamburger");
  nav.classList.toggle("navAnim");
});

// --------------------------------------------------------------------------
// ----------------------------------MAIN PAGE-------------------------------
// --------------------------------------------------------------------------

start.addEventListener("click", (e) => {
  e.preventDefault();
  stopCountDown.classList.add("stopCountDownDisplay");
  if (goChecked === false && stopChecked === false) {
    chosenTime = choice.value;
    time.h = Math.floor(chosenTime / 60);
    time.m = chosenTime % 60;
    time.s = 0;

    if (chosenTime > 0 && chosenTime <= 1440) {
      choice.style.background = "rgba(255, 255, 255, .6)";
      choice.disabled = true;
      goChecked = true;

      counter();
    } else {
      alert("Veuillez saisir un nombre entre 1 et 1440");
      choice.value = null;
    }
  } else {
    alert("Veuillez réinitialiser la valeur précédente");
  }
});

stopCountDown.addEventListener("click", (e) => {
  e.preventDefault();
  if (goChecked === true) {
    goChecked = false;
    stopChecked = true;
    document.getElementById("stopIcon").style.display = "block";
    document.getElementById("playIcon").style.display = "none";
  } else {
    goChecked = true;
    document.getElementById("stopIcon").style.display = "none";
    document.getElementById("playIcon").style.display = "block";
    counter();
  }
});

reset.addEventListener("click", (e) => {
  e.preventDefault = false;
});
