export class User {
    constructor(_name, _code, _faculty, _borrowedMaterial) {
        this._name = _name;
        this._code = _code;
        this._faculty = _faculty;
        this._borrowedMaterial = _borrowedMaterial;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get code() {
        return this._code;
    }
    set code(code) {
        this._code = code;
    }
    get faculty() {
        return this._faculty;
    }
    set faculty(faculty) {
        this._faculty = faculty;
    }
    get borrowedMaterial() {
        return this._borrowedMaterial;
    }
    set borrowedMaterial(borrowedMaterial) {
        this._borrowedMaterial = borrowedMaterial;
    }
    deleteBorrowedMaterial() {
        this._borrowedMaterial = undefined;
    }
}
