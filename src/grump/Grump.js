import { isClass, isStatelessComponent, handleHTMLAttributes } from './utils';
import { Component } from './Component'

(() => {
  /**
   * 
   * @param {Element} element - the HTML element to render the content into
   * @param {string || Component} children - strings or Components
   */
  const anElement = (element, props, children) => {
    /*
     * Here we're dealing with a class component
     * so instead of returning whatever is returned,
     * we want to return whatever is inside the render()
     * method 
     */
    if (isClass(element)) {
      const component = new element(props);
      return component.render();
    }

    /*
     * If it's a function, we're dealing with a "stateless"
     * component. In this case, just return whatever was returned
     * in the function passed 
     */
    if (isStatelessComponent(element)) {
      return element(props);
    }

    const anElement = document.createElement(element);

    children.map(eachChild => {
      if (typeof eachChild === 'object') {
        anElement.appendChild(eachChild);
      } else {
        anElement.innerHTML += eachChild;
      }
    });
    return handleHTMLAttributes(anElement, props, children);
  }

  const createElement = (el, props, ...children) => {
    return anElement(el, props, children);
  }

  window.Grump = {
    createElement,
    Component
  };

  window.GrumpDOM = {
    render: (el, domEl) => {
      domEl.appendChild(el);
    }
  }
})()