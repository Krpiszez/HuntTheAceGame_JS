const cardObjectDefinitions = [
    {id:1, imagePath:'images\card-KingHearts.png'},
    {id:2, imagePath:'images\card-JackClubs.png'},
    {id:3, imagePath:'images\card-QueenDiamonds.png'},
    {id:4, imagePath:'images\card-AceSpades.png'}
]

const cardBackImgPath = "images\card-back-Blue.png";
/*
<div class="card">
                <div class="card-inner">
                    <div class="card-front">
                        <img src="images\card-JackClubs.png" alt="" class="card-img">
                    </div>
                    <div class="card-back">
                        <img src="images\card-back-Blue.png" alt="" class="card-img">
                    </div>
                </div>
            </div>
*/
function createCard(cardItem){
    //create div elements that make up a card
    const cardElem = createElement('div');
    const cardInnerElem = createElement('div');
    const cardFrontElem = createElement('div');
    const cardBackElem = createElement('div');
    
    // create front and back image elements for a card
    const cardFrontImg = createElement('img');
    const cardBackImg = createElement('img');
   
    //add class and id to card element
    addClassToElement(cardElem, 'card');
    addIdToElement(cardElem, darItem.id);
   
    //add class to inner card element
    addClassToElement(cardInnerElem, 'card-inner');

    //add class to front card element
    addClassToElement(cardFrontElem, 'card-front');

    //add class to back card element
    addClassToElement(cardBackElem, 'card-back');

    //add src att and appropriate value to img element - back of card
    addSrcToImageElement(cardBackElem, cardBackImgPath);

    //add src att and appropriate value to img element - front of card
    addSrcToImageElement(cardFrontElem, cardItem.imagePath);

    //assign class to back image element of back of card
    addClassToElement(cardBackElem, 'card-img');

    //assign class to back image element of front of card
    addClassToElement(cardFrontElem, 'card-img');

    //add front image element as child element to front card of element
    addChildElement(cardFrontElem, cardFrontImg);

    //add back image element as child element to back card of element
    addChildElement(cardBackElem, cardBackImg);

    
}


function createElement(elemType){
    return document.createElement(elemType);
}
function addClassToElement(elem, className){
    elem.classList.add(className);
}
function addIdToElement(elem, id){
        elem.id = id;
}
function addSrcToImageElement(imgElem, src){
    imgElem.src = src;
}
function addChildElement(parentElem, childElem){
    parentElem.appendChild(childElem);
}