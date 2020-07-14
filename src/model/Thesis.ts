import { BibliographicMaterial } from "./BibliographicMaterial.js";

export class Thesis extends BibliographicMaterial{

    constructor(title: string, 
                description: string, 
                theme: string, 
                extension: string, 
                author: string,
                id: number
        ){
        super(title,description,theme,extension,author,'Thesis',id);
    }


    clone(): Thesis{
        return new Thesis(this.title, this.description, this.theme, this.extension, this.author, this.id);
    }
}