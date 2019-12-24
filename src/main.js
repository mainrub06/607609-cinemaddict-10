import search from "./components/search.js";
import account from "./components/account.js";
import menu from "./components/menu.js";
import sort from "./components/sort.js";
// import films from "./components/films.js";
import card from "./components/card.js";

import {films} from "./data";
import {parseDuration, createElement} from "./utils";

const COUNT_FILMS = 5;
const COUNT_FILMS_TOP = 2;
const COUNT_FILMS_MOST = 2;

const doc = document;
const $header = doc.querySelector(`.header`);
const $main = doc.querySelector(`.main`);


const $films = doc.querySelector(`.films-list .films-list__container`);
const $filmsTop = doc.querySelectorAll(`.films-list--extra .films-list__container`)[0];
const $filmsMost = doc.querySelectorAll(`.films-list--extra .films-list__container`)[1];

const renderHTML = function (inner, target, pos) {
  const element = document.createElement(`template`);
  element.innerHTML = inner();
  if(pos=== 'start') {
    target.prepend(element.content);
  } else {
    target.append(element.content);
  }
};

const renderComponents = () => {
  renderHTML(search, $header);
  renderHTML(account, $header);
  renderHTML(menu, $main, 'start');
  renderHTML(sort, $main, 'start');
  // renderHTML(films, $main);

  for (let i = 0; i < COUNT_FILMS; i++) {
    let el = card(films[i]);
    $films.append(createElement(el));
  }
  for (let i = 0; i < COUNT_FILMS_TOP; i++) {
    let el = card(films[i]);
    $filmsTop.append(createElement(el));
  }
  for (let i = 0; i < COUNT_FILMS_MOST; i++) {
    let el = card(films[i]);
    $filmsMost.append(createElement(el));
  }




};


renderComponents();

