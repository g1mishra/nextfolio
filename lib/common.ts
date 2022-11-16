export const scrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.setAttribute('tabindex', '-1');
    element.focus();
    element.removeAttribute('tabindex');
  }
};

export const scrollIntoviewByRef = (ref: HTMLElement) => {
  ref?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
};

export function isElementInViewport(el: HTMLElement) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

export function getLineHeight(el: HTMLElement) {
  const temp = document.createElement(el.nodeName);
  let ret;
  temp.setAttribute(
    'style',
    'margin:0; padding:0; ' +
      'font-family:' +
      (el.style.fontFamily || 'inherit') +
      '; ' +
      'font-size:' +
      (el.style.fontSize || 'inherit')
  );
  temp.innerHTML = 'A';
  el.parentNode?.appendChild(temp);
  ret = temp.clientHeight;
  temp.parentNode?.removeChild(temp);
  return ret;
}