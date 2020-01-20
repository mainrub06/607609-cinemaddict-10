import {
  createElement
} from "../utils/render";

export class Component {
  constructor() {
    if (new.target === Component) {
      throw new Error(`Can't instantiate AbstractComponent, only concrete one.`);
    }

    this._element = null;
  }

  get element() {
    return this._element;
  }

  get template() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  bind() { }

  unbind() { }

  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }

  unrender() {
    this.unbind();
    this._element = null;
  }
}
