import './styles/styles.css';
import './bloop';

const Hello = () => {
  return Bloop.createElement('div', null, 'Hello World')
}

const helloWorld = Bloop.createElement(Hello, null, `Hello World`);
BloopDOM.render(helloWorld, document.getElementById('app'));