import { BibliographicMaterial } from "./BibliographicMaterial.js";
export class Thesis extends BibliographicMaterial {
    constructor(title, description, theme, extension, author, id) {
        super(title, description, theme, extension, author, 'Thesis', id);
    }
    clone() {
        return new Thesis(this.title, this.description, this.theme, this.extension, this.author, this.id);
    }
}
