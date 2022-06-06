"use strict";

const box = document.querySelector(".box");
const block = document.querySelector(".block");

console.log(block);
// if (block){
// console.log(block.textContent); // blad ktory blockuje caly scrypt dalej
//}
console.log(block?.textContent); // operation chaning operator, dla pracy z elementami na stronie, sprawdza czy dany element istnieje na stronoe 

// block?.textConetnt = '123';

console.log(1 + 2);

const userData = {
  name: "Dmytro",
  age: null,
  say: function(){
      console.log('Hello!')
  },
  options:['delete', 'add', 'put']
};

userData.say();
userData.hi?.();// Mozna sprawdzac czy istnieje taki metod 
console.log(userData?.options?.[2]);
 
// if (userData && userData.skills && userData.skills.js) {
//   console.log(userData.skills.js);
// }


console.log(userData?.skills?.js);// sprawdz lewa strone od ? 