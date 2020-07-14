import { BibliographicMaterial } from '../model/BibliographicMaterial.js';
import { Book } from '../model/Book.js';

let book1: Book = new Book("Analisis de Algoritmos I","Un resumen breve de los algoritmos", "Algoritmos","200 pag","Albert Deitel", 1);
let book2 = book1.clone();
book2.id = 2;
book2.title = "Analisis de Algoritmos II";
let book3: Book = new Book("Sistemas Operativos: Introduccion", "Vista general de los SO usados hoy","Sistemas Operativos", "330 pag","Jeremiah Hobbs", 3)
let book4 = book3.clone();
book4.id = 4;
book4.title = "Sistemas Operativos II: Nivel avanzado";

export let bookDatabase: BibliographicMaterial[] = [
    book1,
    book2,
    book3,
    book4
];