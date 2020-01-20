import {
    Component
} from "./abstract-component";

export class Sort extends Component {
    constructor() {
        super();

        this._element = null;
    }

    get template() {
        return `
        <ul class="sort">
          <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
          <li><a href="#" class="sort__button">Sort by date</a></li>
          <li><a href="#" class="sort__button">Sort by rating</a></li>
        </ul>
      `;
    }
}
