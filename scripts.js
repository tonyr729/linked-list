var inputTitle = document.querySelector('.input__title');
var inputUrl = document.querySelector('.input__url');
var inputSubmit = document.querySelector('.input__submit');
var sectionRight= document.querySelector('.section__right');
var card = document.createElement('article');
var sectionRight = document.querySelector('.section__right');
var articleLink = document.querySelector('.article__link');
var bookmarkMadeCounter = document.querySelector('.article__p-made');
var bookmarkReadCounter = document.querySelector('.article__p-read');
var counter = 1;
var warningText = document.querySelector('.article__p-warning');
var deleteAllButton = document.querySelector('.button__delete');



inputSubmit.addEventListener('click', createBookmark);
function createBookmark() {
  event.preventDefault();
  var sectionRight= document.querySelector('.section__right');
  var card = document.createElement('article');
  card.setAttribute('class', 'card');
  console.log(sectionRight);
  console.log(card);
  createCard(sectionRight, card); 
}

function createCard(section, article) {
  section.appendChild(article);
  article.innerHTML = (`
    <h2 class="article__h2-title">${inputTitle.value}</h2>
    <div class="article__link">
      <a class="article__p-link" href="${inputUrl.value}">${inputUrl.value}</a>
    </div>
    <button class="article__button-read" id="article__button-read">Read</p>
    <button class="article__button-delete" id="article__button-delete">Delete</p>`);
  bookmarkMadeCounter.innerText = 'Bookmark Made: ' + counter;
  counter++;
}

sectionRight.addEventListener('click', markedRead);
function markedRead() {
  if (event.target && event.target.matches(".article__button-read")) {
    console.log('EventlistenerCard')
    var card = event.target.closest('article');
    console.log(card)
    card.classList.toggle('readCard');
    event.target.classList.toggle('readButton');
    var array = document.querySelectorAll('.readCard')
    bookmarkReadCounter.innerText = 'Read: ' + array.length;
    console.log(array.length);

  }
};

sectionRight.addEventListener('click', deleteCard);
function deleteCard() {
  if (event.target && event.target.matches(".article__button-delete")) {
  var card = event.target.closest('article');
  card.remove();
  var array = document.querySelectorAll('.readCard');
  bookmarkReadCounter.innerText = 'Read: ' + array.length;
  }
}

deleteAllButton.addEventListener('click', deleteAll);
function deleteAll() {
  var allRead = document.querySelectorAll('.readCard');
  for (var i = 0; i < allRead.length; i++) {
    allRead[i].remove();
  }


}
inputTitle.addEventListener('input', disableEnter)
inputUrl.addEventListener('input', disableEnter)
function disableEnter() {
  console.log('disableEnter')
  if (inputTitle.value === '' || inputUrl.value === '') {
    inputSubmit.disabled = true;
    warningText.innerText = '* Please put information in the required fields *';
  } else {
    inputSubmit.disabled = false;
    warningText.innerText = '';
    console.log("working");
  }
}