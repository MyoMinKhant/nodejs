function add(x, y) {
  return x + y;
}
console.log(add(100, 200));

//Creare HTML Tag
function createDiv(height = '100px', width = '100px', border = 'solid 1px red') {
  let div = document.createElement('div');
  div.style.height = height;
  div.style.width = width;
  div.style.border = border;
  document.body.appendChild(div);
  return div;
}
console.log(createDiv(undefined, undefined, 'solid 5px blue'))

//Date Testing
console.log("Date Testing")
function date(d = today()) {
  console.log(d);
}
function today() {
  return (new Date()).toLocaleDateString("en-US");
}
console.log(today())

//Function Testin
console.log("Function Testing")
function add(x = 1, y = x, z = x + y) {
  return x + y + z;
}
console.log(add(5));

//Function Testing
let taxRate = () => 0.1;
let getPrice = function( price, tax = price * taxRate() ) {
    return price + tax;
}
//let fullPrice = getPrice(100);
console.log(fullPrice = getPrice(100)); // 110

//Arguments Testing
function sum(...args) {
  let total = 0;
  for (const a of args) {
      total += a;
  }
  return total;
}
console.log(sum(1, 2, 3));

//Spread Operator testing
const odd = ['Hi','Hello','How are you?'];
const combined = ['See You','Bye','Next Time', ...odd];
console.log(combined);

//Compare Function
function compare(a, b) {
  return a - b;
}
let result1 = compare.apply(null, [1, 2]);
console.log(result1);//-1
let result2 = compare(...[1, 2]);
console.log(result2); // -1

//Spread Operator and Strings
let chars = [...'Dangerous'];
let chars1 = ['Dangerous']
console.log(chars); //['D', 'a', 'n', 'g', 'e', 'r', 'o', 'u', 's']
console.log(chars1)//['Dangerous']

//Array Entries Method
let colors = ['Red', 'Green', 'Blue'];
for (const [index, color] of colors.entries()) {
    console.log(`${color} is at index ${index}`);
}

//Array Map Object
let colours = new Map();
colours.set('red', '#ff0000');
colours.set('green', '#00ff00');
colours.set('blue', '#0000ff');
console.log(colours);
for (let color of colours) {
    console.log(color);
}
