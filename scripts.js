var inputTitle = document.querySelector('.input__title');
var inputUrl = document.querySelector('.input__url');
var inputSubmit = document.querySelector('.input__submit');
var sectionRight= document.querySelector('.section__right');
var card = document.createElement('article');
var articleButtonRead = document.querySelector('#article__button-read');
var articleLink = document.querySelector('.article__link');
var bookmarkMadeCounter = document.querySelector('.article__p-made');
var counter = 1;


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
    <button class="article__button" id="article__button-read">Read</p>
    <button class="article__button" id="article__button-delete">Delete</p>`);
  bookmarkMadeCounter.innerText = 'Bookmark Made: ' + counter;
  counter++;
}

articleButtonRead.addEventListener('click', markedRead);
function markedRead() {
  console.log("button working")
  card.setAttribute('class', 'readCard');
  articleButtonRead.setAttribute('class', 'readButton');
  articleLink.setAttribute('class', 'readLink');
}

inputTitle.addEventListener('input', disableEnter)
inputUrl.addEventListener('input', disableEnter)
function disableEnter() {
  console.log('disableEnter')
  if(inputTitle.value === '' && inputUrl.value === ''){
    inputSubmit.disabled = true;
    // warningText.textContent = '* Please put information in the required fields *';
  } else if (inputTitle.value === '' || inputUrl.value === '') {
    inputSubmit.disabled = true;
    // warningText.textContent = '* Please put information in the required fields *';
  } else {
    inputSubmit.disabled = false;
  }
}