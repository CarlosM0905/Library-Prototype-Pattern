import { BibliographicMaterial } from "./BibliographicMaterial.js";
export class Magazine extends BibliographicMaterial {
    constructor(title, description, theme, extension, author, id) {
        super(title, description, theme, extension, author, 'Magazine', id);
    }
    clone() {
        return new Magazine(this.title, this.description, this.theme, this.extension, this.author, this.id);
    }
}
