import {
    Component
  } from "./abstract-component";
  
  export class User extends Component {
    constructor() {
      super();
  
      this._element = null;
    }
  
    get template() {
      return `
        <section class="header__profile profile">
          <p class="profile__rating">Movie Buff</p>
          <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
        </section>
      `;
    }
  }
  