import { isClass, isStatelessComponent } from './utils';

(() => {
  /**
   * 
   * @param {Element} element - the HTML element to render the content into
   * @param {string || Component} children - strings or Components
   */
  const anElement = (element, children) => {
    /*
     * Here we're dealing with a class component
     * so instead of returning whatever is returned,
     * we want to return whatever is inside the render()
     * method 
     */
    if (isClass(element)) {
      const component = new element();
      return component.render();
    }

    /*
     * If it's a function, we're dealing with a "stateless"
     * component. In this case, just return whatever was returned
     * in the function passed 
     */
    if (isStatelessComponent(element)) {
      return element();
    }

    const anElement = document.createElement(element);

    children.map(eachChild => {
      if (typeof eachChild === 'object') {
        anElement.appendChild(eachChild);
      } else {
        anElement.innerHTML += eachChild;
      }
    });
    return anElement;
  }

  const createElement = (el, props, ...children) => {
    return anElement(el, children);
  }

  window.Bloop = {
    createElement
  };

  window.BloopDOM = {
    render: (el, domEl) => {
      domEl.appendChild(el);
    }
  }
})()