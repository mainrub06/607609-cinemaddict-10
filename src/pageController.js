import {
    Component
} from "./components/abstract-component";
import {
    Card
} from "./components/card";
import {
    createElement
} from "./utils";
import {
    CardDetail
} from "./components/cardDetail.js";
import {
    removeElement
} from "./utils.js";


import { User } from "./components/user";
import { Search } from "./components/search";
import { Menu } from "./components/menu";
import { Sort } from "./components/sort";


export class PageController extends Component {
    constructor(cards) {
        super();
        this._cards = cards;

        this._visibleElements = 5;
        this._element = null;
    }

    renderElements() {
        const doc = document;
        const $header = doc.querySelector(`.header`);
        const $main = doc.querySelector(`.main`);
        const $films = doc.querySelector(`.films`);

        const UserEl = new User();
        const SearchEl = new Search();
        const MenuEl = new Menu();
        const SortEl = new Sort();
        MenuEl.render();
        UserEl.render();
        SearchEl.render();
        SortEl.render();
        // add components
        $header.appendChild(SearchEl.element);
        $header.appendChild(UserEl.element);
        $main.insertBefore(MenuEl.element, $films);
        $main.insertBefore(SortEl.element, $films);
        // add film-list

    }

    renderCards(data) {
        const count = this._visibleElements;
        const $moviesExtra = this._element.querySelectorAll(`.films-list--extra .films-list__container`);

        for (let i = 0; i < count; i++) {
            const component = new Card(data[i]);
            const componentDetail = new CardDetail(data[i]);
            component.render();
            this._element.querySelector(`.films-list .films-list__container`).appendChild(component.element);

            component.onDetail = () => {
                componentDetail.render();
                document.body.appendChild(componentDetail.element);
            };

            componentDetail.onClose = () => {
                // componentDetail.unrender();
                removeElement(`.film-details`);
            };
            componentDetail.onEsc = () => {
                // componentDetail.unrender();
                removeElement(`.film-details`);
            };
        }

        for (let i = 0; i < 2; i++) {
            const component = new Card(data[i]);
            const componentDetail = new CardDetail(data[i]);
            component.render();
            $moviesExtra[0].appendChild(component.element);

            component.onDetail = () => {
                componentDetail.render();
                document.body.appendChild(componentDetail.element);
            };

            componentDetail.onClose = () => {
                // componentDetail.unrender();
                removeElement(`.film-details`);
            };
            componentDetail.onEsc = () => {
                // componentDetail.unrender();
                removeElement(`.film-details`);
            };
        }


        for (let i = 0; i < 2; i++) {
            const component = new Card(data[i]);
            const componentDetail = new CardDetail(data[i]);
            component.render();
            $moviesExtra[1].appendChild(component.element);

            component.onDetail = () => {
                componentDetail.render();
                document.body.appendChild(componentDetail.element);
            };

            componentDetail.onClose = () => {
                // componentDetail.unrender();
                removeElement(`.film-details`);
            };
            componentDetail.onEsc = () => {
                // componentDetail.unrender();
                removeElement(`.film-details`);
            };
        }
    }

    renderAllCards() {
        // буду отрисосывать все элементы
        this._visibleElements = this._cards.length;
        console.log(this._visibleElements);
    }

    bind() {
        this._element.querySelector(`.films-list__show-more`).addEventListener(`click`, this.renderAllCards.bind(this));
    }


    init() {
        this.renderElements();
        this.renderCards(this._cards);
    }

    render() {
        this._element = createElement(this.template);
        this.init();
        this.bind();
        return this._element;
    }

    get template() {
        return /* html*/ `
        <section class="films">
          <section class="films-list">
            <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
            <div class="films-list__container">
  
            </div>
            <button class="films-list__show-more">Show more</button>
          </section>
  
          <section class="films-list--extra">
            <h2 class="films-list__title">Top rated</h2>
            <div class="films-list__container">
  
            </div>
          </section>
  
          <section class="films-list--extra">
            <h2 class="films-list__title">Most commented</h2>
            <div class="films-list__container">
  
            </div>
          </section>
        </section>
      `;
    }
}
