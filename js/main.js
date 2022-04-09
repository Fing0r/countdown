import COUNTDOWN from "./UiElements";
import showDifferenceDate from "./view";
import animateMessage from "./animation";

function changeDate() {
  animateMessage(COUNTDOWN.SET_DATE, COUNTDOWN.TIME, COUNTDOWN.ERROR);
  COUNTDOWN.TIMER = false;
  COUNTDOWN.ANIMATION = true;

  if (!COUNTDOWN.IS_START) return;

  COUNTDOWN.IS_START = false;
}

function setDate(e) {
  e.preventDefault();

  if (COUNTDOWN.TIMER) return;
  COUNTDOWN.TIMER = true;

  showDifferenceDate();
}

COUNTDOWN.FORM.addEventListener("submit", setDate);
COUNTDOWN.INPUT.addEventListener("change", changeDate);
