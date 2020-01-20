export const RenderPosition = {
    BEFOREBEGIN: `beforebegin`,
    AFTERBEGIN: `afterbegin`,
    BEFOREEND: `beforeend`
};

export const createElement = (element) => {
    const $el = document.createElement(`template`);
    $el.innerHTML = element;
    return $el.content;
};

export const render = (container, component, place) => {
    switch (place) {
        case RenderPosition.AFTERBEGIN:
            container.prepend(component.getElement());
            break;
        case RenderPosition.BEFOREEND:
            container.append(component.getElement());
            break;
        case RenderPosition.BEFOREBEGIN:
            container.before(component.getElement());
            break;
    }
};

export const remove = (component) => {
    component.getElement().remove();
    component.removeElement();
};
