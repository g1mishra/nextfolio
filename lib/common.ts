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

export const diffInMonths = (diffInMs: number) =>
  Math.round(diffInMs / (1000 * 60 * 60 * 24 * 30.44));

export const AboutSubRoutes = ['bio', 'education', 'experience', 'skills'] as const;

export const getAbsolutePath = (page: string) => {
  let returnString = [];
  if (absolutePath[page]) returnString.push(...absolutePath[page]);
  else returnString.push(page);
  return returnString;
};

const absolutePath: { [index: string]: any } = {
  bio: ['personal-info', 'bio'],
  education: ['personal-info', 'education'],
  experience: ['personal-info', 'experience'],
  skills: ['personal-info', 'skills'],
};

export const getBlogBasePath = (slug = '') => {
  if (process.env.NODE_ENV === 'development') {
    return `http://blog.localhost:3001${slug}`;
  } else {
    return `https://blog.g1mishra.dev${slug}`;
  }
};

export const getBasePath = (slug = '') => {
  if (process.env.NODE_ENV === 'development') {
    return `http://localhost:3001${slug}`;
  } else {
    return `https://g1mishra.dev${slug}`;
  }
};
