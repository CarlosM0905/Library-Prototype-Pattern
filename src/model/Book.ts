import { BibliographicMaterial } from "./BibliographicMaterial.js";

export class Book extends BibliographicMaterial{

    constructor(title: string, 
                description: string, 
                theme: string, 
                extension: string, 
                author: string,
                id: number
        ){
        super(title,description,theme,extension,author,'Book',id);
    }


    clone(): Book{
        return new Book(this.title, this.description, this.theme, this.extension, this.author, this.id);
    }
}