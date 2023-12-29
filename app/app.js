import isEmail  from "validator/lib/isEAN";

console.log(isEmail("agas@a.com"));
console.log('automatski reload')

document.querySelector('p').innerText = 'zamalo izgubi selekt'

if (module.hot) {
  module.hot.accept()
}