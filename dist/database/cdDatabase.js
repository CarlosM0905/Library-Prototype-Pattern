import { CD } from './../model/CD.js';
let cd1 = new CD("Ingles I", "Conceptos y nociones basicas", "Ingles", "180 min", "John Wilbert", 1);
let cd2 = cd1.clone();
cd2.extension = "120 min";
cd2.id = 2;
cd2.title = "Ingles III";
let cd3 = new CD("Ingles II", "Pasado y Futuro", "Ingles", "180 min", "Michael Dru", 3);
let cd4 = cd3.clone();
cd4.id = 4;
cd4.author = "Jesus Marieh";
export let cdDatabase = [
    cd1,
    cd2,
    cd3,
    cd4
];
