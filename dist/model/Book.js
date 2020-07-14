import { BibliographicMaterial } from "./BibliographicMaterial.js";
export class Book extends BibliographicMaterial {
    constructor(title, description, theme, extension, author, id) {
        super(title, description, theme, extension, author, 'Book', id);
    }
    clone() {
        return new Book(this.title, this.description, this.theme, this.extension, this.author, this.id);
    }
}
