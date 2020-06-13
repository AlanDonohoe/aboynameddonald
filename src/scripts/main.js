import { GetLorem } from './utils';
const loremEL = document.querySelector('.lorem');
GetLorem()
  .then(res => {
    const markup = res.reduce((acc, val) => (acc += `<p>${val}</p>`), '');
    loremEL.innerHTML = markup;
  }).catch(err => (loremEL.innerHTML = err));