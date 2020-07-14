import { BibliographicMaterial } from '../model/BibliographicMaterial.js';
import { Thesis } from './../model/Thesis.js';

let thesis1: Thesis = new Thesis("Comercio electronico: Marzo 2020","El mundo del ecommerce actual", "Comercio electronico","50 pag","Joseph Railly", 1);
let thesis2 = thesis1.clone();
let thesis3: Thesis = new Thesis("Cartillas de programacion", "Topicos de programacion basicos y anecdotas","Algoritmos", "40 pag","Jeremiah Hobbs", 2)
let thesis4 = thesis3.clone();
thesis2.id = 3;
thesis4.id = 4;

export let thesisDatabase: BibliographicMaterial[] = [
    thesis1,
    thesis2,
    thesis3,
    thesis4
];