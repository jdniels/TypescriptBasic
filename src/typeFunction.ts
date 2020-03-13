// Typedata pada Function Ts

// Function must return String
function getName(name): string {
  return `Hello, my Name is ${name}`;
}
console.log(getName("Juan"));

function getAge(): number {
  return 21;
}

// Function Void
/* 
    Function Void not have a return statement because is Void :D
*/
function isVoid(): void {
  console.log("Function Void");
}

// Function Recive Arguments

/* 
    argument pada ts harus ada type DATA!!!
    Ex : value1: number or String
*/

function multiply(a: number, b: number): number {
  return a * b;
}

console.log(multiply(1, 2)); //Menerima Arguments

function concat(a: string, b: string): String {
  return a + b;
}

console.log(concat("Juan", "Daniel"));

/* 
    function as type WTF?
*/

// Type sebagai Function
type Tambah = (value1: number, value2: number) => number;

// Pake const kek Js gitu, const namaFunction: Typenya = (Argumentsnya): Returnnya (Number/String) => { return ;}
const Add: Tambah = (value1: number, value2: number): number => {
  return value1 + value2;
};

// Function dengan Default Value pada param
const fullName = (first: string, last: string = "Daniel"): string => {
  return first + last;
};

console.log(fullName("Juan")); // ini akan jadi Juan Daniel, karna daniel adalah default param pada function diatas ^
console.log(fullName("Juan", "Nopa")); //Ini akan jadi Juan Nopa, karna Nopa adalah argument jadi User, tidak menggunakan Default Value pada Param

// Function degan Optional Param
/* 
  Kalau parameter 1 Optional, param kedua harus Optional juga, kalau gk error
*/

const getFullName = (value1?: string, value2?: string): string => {
  return value1 + value2;
};

console.log(getFullName("Juan")); // akan jadi Juan + undefined -> karna param kedua gk isi
console.log(getFullName("Juan", "Daniel")); // akan jadi Juan + Daniel

const getUmur = (value1: number, value2?: string): string => {
  return value1 + value2;
};
