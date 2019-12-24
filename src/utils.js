export const parseDuration = (minutes) => {

  const getHours = (value) => {
    let int = Math.trunc(value/60);
    let mins = value - int * 60;
    return `${int}h ${mins}m`;
  }

  const getMins = (value) => {
    return value + 'm';
  }

  return minutes > 60 ? getHours(minutes) : getMins(minutes);
}


export const createElement = function (element) {
  const $el = document.createElement(`template`);
  $el.innerHTML = element;
  return $el.content;
};
