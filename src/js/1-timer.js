import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const dateTimeInput = document.querySelector('#datetime-picker');
const initiateButton = document.querySelector('[data-start]');
const daysDisplay = document.querySelector('[data-days]');
const hoursDisplay = document.querySelector('[data-hours]');
const minutesDisplay = document.querySelector('[data-minutes]');
const secondsDisplay = document.querySelector('[data-seconds]');

let targetDateTime;
let countdownTimerId;

initiateButton.disabled = true;

flatpickr(dateTimeInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    targetDateTime = selectedDates[0].getTime();

    if (targetDateTime < Date.now()) {
      displayError('Please choose a date in the future');
      initiateButton.disabled = true;
    } else {
      initiateButton.disabled = false;
    }
  },
});

initiateButton.addEventListener('click', () => {
  startCountdown();
});

function startCountdown() {
  initiateButton.disabled = true;
  dateTimeInput.disabled = true;

  countdownTimerId = setInterval(() => {
    const currentTime = Date.now();
    const remainingTime = targetDateTime - currentTime;

    if (remainingTime <= 0) {
      clearInterval(countdownTimerId);
      displayInfo('End of countdown');
      dateTimeInput.disabled = false;
      return;
    }

    updateCountdownDisplay(remainingTime);
  }, 1000);
}

function updateCountdownDisplay(remainingTime) {
  const { days, hours, minutes, seconds } = convertMilliseconds(remainingTime);
  daysDisplay.textContent = formatWithLeadingZero(days);
  hoursDisplay.textContent = formatWithLeadingZero(hours);
  minutesDisplay.textContent = formatWithLeadingZero(minutes);
  secondsDisplay.textContent = formatWithLeadingZero(seconds);
}

function convertMilliseconds(ms) {
  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;

  return {
    days: Math.floor(ms / day),
    hours: Math.floor((ms % day) / hour),
    minutes: Math.floor((ms % hour) / minute),
    seconds: Math.floor((ms % minute) / second),
  };
}

function formatWithLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function displayError(message) {
  iziToast.error({
    message,
    position: 'topRight',
    backgroundColor: '#EF4040',
    messageColor: '#ffffff',
    close: true,
    theme: 'dark',
  });
}

function displayInfo(message) {
  iziToast.info({
    message,
    position: 'topRight',
    backgroundColor: '#4E75FF',
    messageColor: '#ffffff',
    close: true,
    theme: 'dark',
  });
}
