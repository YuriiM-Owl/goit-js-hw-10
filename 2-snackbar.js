import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as s}from"./assets/vendor-BbbuE1sJ.js";const l=document.querySelector(".form");l.addEventListener("submit",o=>{o.preventDefault();const t=Number(o.target.delay.value),r=o.target.state.value;new Promise((e,i)=>{setTimeout(()=>{r==="fulfilled"?e(t):i(t)},t)}).then(e=>{console.log(`✅ Fulfilled promise in ${e}ms`),s.success({theme:"dark",title:"OK",message:`Fulfilled promise in ${e}ms`,position:"topRight",backgroundColor:"#59A10D",titleColor:"#fff",messageColor:"#fff"})}).catch(e=>{console.log(`❌ Rejected promise in ${e}ms`),s.error({theme:"dark",title:"Error",message:`Rejected promise in ${e}ms`,position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff"})})});
//# sourceMappingURL=2-snackbar.js.map
