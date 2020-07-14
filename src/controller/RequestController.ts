import { BibliographicMaterial } from './../model/BibliographicMaterial.js';
import { thesisDatabase } from './../database/thesisDatabase.js';
import { magazineDatabase } from './../database/magazineDatabase.js';
import { bookDatabase } from './../database/bookDatabase.js';
import { cdDatabase} from './../database/cdDatabase.js';

import { User } from "../model/User.js";


export class RequestController{

    
    bookRow = document.querySelector('#bookRow') as HTMLDivElement;
    magazineRow = document.querySelector('#magazineRow') as HTMLDivElement;
    cdRow = document.querySelector('#cdRow') as HTMLDivElement;
    thesisRow = document.querySelector('#thesisRow') as HTMLDivElement;

    constructor(private user: User){}

    populatePage(){
        for (const book of bookDatabase) {
            let card = this.createCard(book);
            this.bookRow.appendChild(card);
        }

        for(const magazine of magazineDatabase){
            let card = this.createCard(magazine);
            this.magazineRow.appendChild(card);
        }

        for(const cd of cdDatabase){
            let card = this.createCard(cd);
            this.cdRow.appendChild(card);
        }

        for(const thesis of thesisDatabase){
            let card = this.createCard(thesis);
            this.thesisRow.appendChild(card); 
        }
    }

    createCard(bibliographicMaterial: BibliographicMaterial){
        // Columna
        let div = document.createElement('div') as HTMLDivElement;
        div.classList.add('col-md-4');
        // Card
        let card = document.createElement('div') as HTMLDivElement;
        card.classList.add('card','bg-primary', 'border-light','shadow-soft','m-2');
        // Card header
        let cardHeader = document.createElement('div') as HTMLDivElement;
        cardHeader.classList.add('card-header','p-3');
        // Image
        let image = document.createElement('img') as HTMLImageElement;
        image.classList.add('card-img-top','rounded');
        image.setAttribute('src', 'https://picsum.photos/id/464/250');
        // Card body
        let cardBody =document.createElement('div') as HTMLDivElement;
        cardBody.classList.add('card-body','pt-2');
        // Card title
        let cardTitle = document.createElement('h4') as HTMLHeadingElement;
        cardTitle.classList.add('card-title','mt-4');
        cardTitle.innerText = `${bibliographicMaterial.title} - ${bibliographicMaterial.author}`
        // Paragraph
        let paragraph = document.createElement('p') as HTMLParagraphElement;
        paragraph.classList.add('card-text');
        paragraph.innerText = `${bibliographicMaterial.description}` 
        // Anchor
        let buttonRequest = document.createElement('a') as HTMLAnchorElement;
        buttonRequest.classList.add('btn','btn-primary','btn-sm','text-success');
        buttonRequest.innerText = 'Request ';


        buttonRequest.setAttribute('data-id', bibliographicMaterial.id.toString());
        buttonRequest.setAttribute('data-type', bibliographicMaterial.type);
        buttonRequest.setAttribute('data-title', bibliographicMaterial.title);
        buttonRequest.setAttribute('data-theme', bibliographicMaterial.theme);

        let icon = document.createElement('span') as HTMLDivElement;
        icon.classList.add('fas','fa-plus-circle');

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


    selectBibliographicMaterial(this: GlobalEventHandlers): void{
        let idData = (this as HTMLButtonElement).getAttribute('data-id');
        let typeData = (this as HTMLButtonElement).getAttribute('data-type');
        let titleData = (this as HTMLButtonElement).getAttribute('data-title');
        let themeData = (this as HTMLButtonElement).getAttribute('data-theme');

        let id = idData ? idData : 0;
        let type = typeData ? typeData : '';
        let title = titleData ? titleData: '';
        let theme = themeData ? themeData: '';

        let selectedTitleBook = document.querySelector('#selectedTitleBook') as HTMLParagraphElement;
        let selectedDescriptionBook = document.querySelector('#selectedDescriptionBook')  as HTMLSpanElement;
        selectedTitleBook.innerText = theme;
        selectedDescriptionBook.innerText = title;
    
    }
    
}
