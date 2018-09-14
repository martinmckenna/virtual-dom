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