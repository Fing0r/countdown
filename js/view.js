import {
  format,
  intervalToDuration,
} from "date-fns";
import COUNTDOWN from "./UiElements";
import animateMessage from "./animation";

function getDifferenceDate() {
  const selectedDate = format(new Date(COUNTDOWN.INPUT.value), "yyyy, MM, dd, HH, mm, ss");
  const currentDate = format(new Date(), "yyyy, MM, dd, HH, mm, ss");

  if (selectedDate < currentDate) throw Error("Дата уже прошла");

  return intervalToDuration({
    start: new Date(...currentDate.split(",")),
    end: new Date(...selectedDate.split(",")),
  });
}

function renderDifferenceDate({
  years,
  days,
  hours,
  minutes,
  seconds,
}) {
  COUNTDOWN.YEAR.textContent = years;
  COUNTDOWN.DAYS.textContent = days;
  COUNTDOWN.HOURS.textContent = hours;
  COUNTDOWN.MINUTE.textContent = minutes;
  COUNTDOWN.SECOND.textContent = seconds;
}

export default function showDifferenceDate() {
  try {
    if (!COUNTDOWN.TIMER) return;

    renderDifferenceDate(getDifferenceDate());

    if (COUNTDOWN.ANIMATION) {
      animateMessage(COUNTDOWN.TIME, COUNTDOWN.ERROR, COUNTDOWN.SET_DATE);
    }

    setTimeout(showDifferenceDate, 1000);
  } catch (error) {
    animateMessage(COUNTDOWN.ERROR, COUNTDOWN.TIME, COUNTDOWN.SET_DATE);

    COUNTDOWN.ERROR.textContent = error.message;
    COUNTDOWN.IS_START = true;
  }
}
