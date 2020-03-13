let str: String = "Hello, World!";
let number: number = 1;

// Type data Any
let typeAny: any;

typeAny = {};
typeAny = 1;

// Type Data Boolean

let isMarried: boolean;

isMarried = true;
isMarried = false;

// Type data Any

let heroes: any = "Nopa";
heroes = {};
heroes = 20;
heroes = [];
heroes = true || false || "keren";

/*
    type data any bisa dimasukan apa aja
    kek diatas, h3h3
*/

// Type data Bawang / Union

/*
    bisa mempunya type data lebih dari 1 :O

    Kasus : Nomor
    Ex : 628515631523 -> Number
    Ex : 085156315623 -> 0nya Hilang, karna type data Number
*/

let phone: number | string; // Bisa gini, pake | or

phone = 628515631523;
phone = "085156315623";
