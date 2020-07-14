import { BibliographicMaterial } from "./BibliographicMaterial.js";
export class CD extends BibliographicMaterial {
    constructor(title, description, theme, extension, author, id) {
        super(title, description, theme, extension, author, 'CD', id);
    }
    clone() {
        return new CD(this.title, this.description, this.theme, this.extension, this.author, this.id);
    }
}
