import { BibliographicMaterial } from "./BibliographicMaterial.js";

export class Magazine extends BibliographicMaterial{

    constructor(title: string, 
                description: string, 
                theme: string, 
                extension: string, 
                author: string,
                id: number
        ){
        super(title,description,theme,extension,author,'Magazine',id);
    }


    clone(): Magazine{
        return new Magazine(this.title, this.description, this.theme, this.extension, this.author, this.id);
    }
}