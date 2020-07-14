export class BibliographicMaterial{

    constructor(private _title: string, 
                private _description: string, 
                private _theme: string, 
                private _extension: string, 
                private _author: string,
                private _type: string,
                private _id: number
                ){}

    get title(): string{
        return this._title;
    }
    
    set title(title: string){
        this._title = title;
    }

    get description(): string{
        return this._description;
    }

    set description(description: string){
        this._description = description;
    }

    get theme(): string{
        return this._theme;
    }

    set theme(theme: string){
        this._theme = theme;
    }

    get extension(): string{
        return this._extension;
    }

    set extension(extension: string){
        this._extension = extension;
    }

    get author(): string{
        return this._author;
    }

    set author(author: string){
        this._author = author;
    }

    get type(): string{
        return this._type;
    }

    set type(type: string){
        this._type = type;
    }

    get id(): number{
        return this._id;
    }

    set id(id: number){
        this._id = id;
    }

    clone(): BibliographicMaterial{
        return new BibliographicMaterial(this._title, this._description, this._theme, this._extension, this._author, this._type, this._id);
    }
}