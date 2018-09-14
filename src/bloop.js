(() => {
  const anElement = (element, children) => {
    /*
     * If it's a function, we're dealing with a "stateless"
     * component. In this case, just return whatever was returned
     * in the function passed 
     */
    if(typeof element === 'function') {
      return element();
    }
    const anElement = document.createElement(element);
    anElement.innerHTML = children.join(' ');
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