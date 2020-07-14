import { thesisDatabase } from './../database/thesisDatabase.js';
import { magazineDatabase } from './../database/magazineDatabase.js';
import { bookDatabase } from './../database/bookDatabase.js';
import { cdDatabase } from './../database/cdDatabase.js';
export class RequestController {
    constructor(user) {
        this.user = user;
        this.bookRow = document.querySelector('#bookRow');
        this.magazineRow = document.querySelector('#magazineRow');
        this.cdRow = document.querySelector('#cdRow');
        this.thesisRow = document.querySelector('#thesisRow');
    }
    populatePage() {
        for (const book of bookDatabase) {
            let card = this.createCard(book);
            this.bookRow.appendChild(card);
        }
        for (const magazine of magazineDatabase) {
            let card = this.createCard(magazine);
            this.magazineRow.appendChild(card);
        }
        for (const cd of cdDatabase) {
            let card = this.createCard(cd);
            this.cdRow.appendChild(card);
        }
        for (const thesis of thesisDatabase) {
            let card = this.createCard(thesis);
            this.thesisRow.appendChild(card);
        }
    }
    createCard(bibliographicMaterial) {
        // Columna
        let div = document.createElement('div');
        div.classList.add('col-md-4');
        // Card
        let card = document.createElement('div');
        card.classList.add('card', 'bg-primary', 'border-light', 'shadow-soft', 'm-2');
        // Card header
        let cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header', 'p-3');
        // Image
        let image = document.createElement('img');
        image.classList.add('card-img-top', 'rounded');
        image.setAttribute('src', 'https://picsum.photos/id/464/250');
        // Card body
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'pt-2');
        // Card title
        let cardTitle = document.createElement('h4');
        cardTitle.classList.add('card-title', 'mt-4');
        cardTitle.innerText = `${bibliographicMaterial.title} - ${bibliographicMaterial.author}`;
        // Paragraph
        let paragraph = document.createElement('p');
        paragraph.classList.add('card-text');
        paragraph.innerText = `${bibliographicMaterial.description}`;
        // Anchor
        let buttonRequest = document.createElement('a');
        buttonRequest.classList.add('btn', 'btn-primary', 'btn-sm', 'text-success');
        buttonRequest.innerText = 'Request ';
        buttonRequest.setAttribute('data-id', bibliographicMaterial.id.toString());
        buttonRequest.setAttribute('data-type', bibliographicMaterial.type);
        buttonRequest.setAttribute('data-title', bibliographicMaterial.title);
        buttonRequest.setAttribute('data-theme', bibliographicMaterial.theme);
        let icon = document.createElement('span');
        icon.classList.add('fas', 'fa-plus-circle');
        buttonRequest.appendChild(icon);
        buttonRequest.onclick = this.selectBibliographicMaterial;
        buttonRequest.href = '#';
        cardHeader.appendChild(image);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(paragraph);
        cardBody.appendChild(buttonRequest);
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        div.appendChild(card);
        return div;
    }
    selectBibliographicMaterial() {
        let idData = this.getAttribute('data-id');
        let typeData = this.getAttribute('data-type');
        let titleData = this.getAttribute('data-title');
        let themeData = this.getAttribute('data-theme');
        let id = idData ? idData : 0;
        let type = typeData ? typeData : '';
        let title = titleData ? titleData : '';
        let theme = themeData ? themeData : '';
        let selectedTitleBook = document.querySelector('#selectedTitleBook');
        let selectedDescriptionBook = document.querySelector('#selectedDescriptionBook');
        selectedTitleBook.innerText = theme;
        selectedDescriptionBook.innerText = title;
    }
}
