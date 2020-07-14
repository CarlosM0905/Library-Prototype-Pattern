export class MaterialBibliografico {
    constructor(_title, _description, _theme, _extension, _author) {
        this._title = _title;
        this._description = _description;
        this._theme = _theme;
        this._extension = _extension;
        this._author = _author;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get description() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }
    get theme() {
        return this._theme;
    }
    set theme(theme) {
        this._theme = theme;
    }
    get extension() {
        return this._extension;
    }
    set extension(extension) {
        this._extension = extension;
    }
    get author() {
        return this._author;
    }
    set author(author) {
        this._author = author;
    }
    clone() {
        return new MaterialBibliografico(this._title, this._description, this._theme, this._extension, this._author);
    }
}
