import './styles/styles.css';
import './bloop/Bloop';
import { Component } from './bloop/Component';

class Hello extends Component {
  render() {
    return Bloop.createElement('div', null, `Hello World`);
  }
}

const helloWorld = Bloop.createElement(Hello, null, null);
BloopDOM.render(helloWorld, document.getElementById('app'));