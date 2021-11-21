$(function() {

  const caseEmptyElem = $('.js-casesListEmpty');
  const listItemsElem = $('.js-casesListItems');
  const listItemElem = $('.js-casesListItem');
  const caseFormElem = $('.js-caseForm');
  const inputNameCase = $('.js-caseName');
  const textАreaCase = $('.js-caseDescription');
  

  caseFormElem.on('submit', onCaseAdd);

  function onCaseAdd(event) {

    event.preventDefault();

    const nameCaseElem = inputNameCase.val();
    const textCaseElem = textАreaCase.val();
    const timeCaseElem = new Date().toLocaleString(); 

    caseEmptyElem.hide();

    listItemsElem.append(`
      <li class="cases-list__item js-casesListItem">
        <article class="list-item js-listItem">
          <header class="list-item__header">
            <h3 class="list-item__title">${nameCaseElem}</h3>
            <button class="list-item__close js-listItemClose" aria-label="Закрыть"></button>
            <button class="list-item__arrow js-listItemHide" aria-expanded="true" aria-controls="js-caseDescription" aria-label="Свернуть"></button>
          </header>
          <div class="list-item__case js-listItemCase">
            <p class="list-item__text">${textCaseElem}</p>
            <time class="list-item__time">${timeCaseElem}</time>
          </div> 
        </article>
      </li>
    `);

    this.reset();

  }; 

  listItemsElem.on( 'click', '.js-listItemHide', function() {
    $(this).parents('.js-listItem').find('.js-listItemCase').slideToggle(1000);
    $(this).toggleClass('js-arrowRotate'); 
  });

  listItemsElem.on( 'click', '.js-listItemClose', function() {
    $(this).parents('.js-casesListItem').remove();
    if(listItemsElem.children(listItemElem).length > 0) {
      caseEmptyElem.hide();
    } else {
        caseEmptyElem.show();
      }
  });
});






































































