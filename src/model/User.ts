import { BibliographicMaterial } from "./BibliographicMaterial.js";

export class User{

    constructor(private _name: string, private _code: string, private _faculty: string, private  _borrowedMaterial?: BibliographicMaterial){}

    get name(): string{
        return this._name;
    }

    set name(name: string){
        this._name = name;
    }

    get code(): string{
        return this._code;
    }

    set code(code: string){
        this._code = code;
    }

    get faculty(): string{
        return this._faculty;
    }

    set faculty(faculty: string){
        this._faculty = faculty;
    }


    get borrowedMaterial(): BibliographicMaterial|undefined{
        return this._borrowedMaterial;
    }

    set borrowedMaterial(borrowedMaterial: BibliographicMaterial|undefined){
        this._borrowedMaterial = borrowedMaterial;
    }

    deleteBorrowedMaterial(): void{
        this._borrowedMaterial = undefined;
    }

}