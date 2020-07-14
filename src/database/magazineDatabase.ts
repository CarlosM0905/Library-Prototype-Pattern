import { Magazine } from './../model/Magazine.js';
import { BibliographicMaterial } from '../model/BibliographicMaterial.js';

let magazine1: Magazine = new Magazine("Comercio electronico: Marzo 2020","El mundo del ecommerce actual", "Comercio electronico","50 pag","Joseph Railly", 1);
let magazine2 = magazine1.clone();
magazine2.id = 2;
let magazine3: Magazine = new Magazine("Cartillas de programacion", "Topicos de programacion basicos y anecdotas","Algoritmos", "340 pag","Jeremiah Hobbs", 3);
let magazine4 = magazine3.clone();
magazine4.id = 4;

export let magazineDatabase: BibliographicMaterial[] = [
    magazine1,
    magazine2,
    magazine3,
    magazine4
];