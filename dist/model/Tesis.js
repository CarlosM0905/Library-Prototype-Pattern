import { BibliographicMaterial } from "./BibliographicMaterial";
export class Thesis extends BibliographicMaterial {
    constructor(title, description, theme, extension, author, type, id) {
        super(title, description, theme, extension, author, type, id);
    }
    clone() {
        return new Thesis(this.title, this.description, this.theme, this.extension, this.author, this.type, this.id);
    }
}
