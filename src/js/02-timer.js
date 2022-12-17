import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const startBtn = document.querySelector('button[data-start]');
const dateChosen = document.querySelector('#datetime-picker');
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const min = document.querySelector('[data-minutes]');
const sec = document.querySelector('[data-seconds]');

let time = null;

startBtn.disabled = true;

//flatpickr

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDate) {
    // const currentDate = new Date();
    if (selectedDate[0] <= new Date()) {
      startBtn.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;

      startBtn.addEventListener('click', countdownTime);

      // time counter

      function countdownTime() {
        time = setInterval(() => {
          startBtn.disabled = true;

          const dateChoosenMs = new Date(dateChosen.value).getTime();
          const now = new Date().getTime();
          const timeCheck = dateChoosenMs - now;

          const { days, hours, minutes, seconds } = convertMs(timeCheck);

          day.innerHTML = days < 10 ? addLeadingZero(days) : days;
          hour.innerHTML = hours < 10 ? addLeadingZero(hours) : hours;
          min.innerHTML = minutes < 10 ? addLeadingZero(minutes) : minutes;
          sec.innerHTML = seconds < 10 ? addLeadingZero(seconds) : seconds;

          if (timeCheck < 1000) {
            clearInterval(time);
            startBtn.disabled = false;
          }
        }, 1000);
      }

      // addLeadingZero

      function addLeadingZero(value) {
          const stringValue = String(value).padStart(2, '0');
        return stringValue;
      }

      // convert 
    function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
    }
  },
};

flatpickr(dateChosen, options);
