//functions
function abc() {
  //functio  diclaration
}

const anc = function () {
  //function expretion
};

var abc = () => {
  //fat arrow function
};

function dance(v1) {
  console.log(` ${v1} nach rha hai `);
}

dance("hourse");
dance("onian");
dance("sumit");

//perametre & arguments
function raj(raj1, raj2) {
  console.log(raj1 + raj2);
}
raj(11, 112);
// data extrect

//ddefault perametre
function add(v1 = 0, v2 = 0) {
  console.log(v1 + v2);
}
add(2, 2);

//rest perametre
function abcd(a, b, c, ...val) {
  console.log(a, b, c, val);
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//return ka matalb  jaha se aya h bwahi daal denge
function abcd() {
  return 12;
}
let val = abcd();
console.log(val);

///
function abcd(v) {
  return 12 + v;
}
let car = abcd(23);
console.log(car);
-