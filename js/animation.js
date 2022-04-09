import COUNTDOWN from "./UiElements";

export default function animateMessage(showElement, ...hideElement) {
  hideElement.forEach((element) => { element.style.color = "black"; });

  setTimeout(() => {
    hideElement.forEach((element) => { element.style.display = "none"; });
    showElement.style.display = "flex";
  }, 500);

  setTimeout(() => {
    showElement.style.color = "white";
  }, 1000);
  COUNTDOWN.ANIMATION = false;
}
