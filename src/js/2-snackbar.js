import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(event.target.delay.value);
  const state = event.target.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      console.log(`✅ Fulfilled promise in ${delay}ms`);
      iziToast.success({
        theme: 'dark',
        title: 'OK',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#59A10D',
        titleColor: '#fff',
        messageColor: '#fff',
      });
    })
    .catch(delay => {
      console.log(`❌ Rejected promise in ${delay}ms`);
      iziToast.error({
        theme: 'dark',
        title: 'Error',
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#EF4040',
        titleColor: '#fff',
        messageColor: '#fff',
      });
    });
});
