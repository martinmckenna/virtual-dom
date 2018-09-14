/**
 * 
 * @param {any} func parameter to be checked for whether it is a class function
 */
export const isClass = (func) => {
  if (!Object.getOwnPropertyDescriptor(func, 'prototype')) { return; }
  const isClass = Object.getOwnPropertyDescriptor(func, 'prototype').value.isClass;
  // if the component has the isClass prop, it's a class
  return !!isClass;
}

/**
 * 
 * @param {any} func parameter to be checked for whether it is a function
 */
export const isStatelessComponent = (func) => {
  return typeof func === 'function'
}

export const handleHTMLAttributes = (element, props, children) => {
  const anElement = element;
  Object.keys(props).map(eachProp => {
    /*
     * If the the prop begins with 'on', add an event listener
     * otherwise, just add the prop as an HTML attribute to the element
     */
    if (/^on.*$/.test(eachProp)) {
      anElement.addEventListener(eachProp.substring(2).toLowerCase(), props[eachProp]);
    } else {
      anElement.setAttribute(eachProp, props[eachProp]);
    };
  });
  return anElement;
}