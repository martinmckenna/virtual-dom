import './styles/styles.css';
import './grump/Grump';

class Hello extends Grump.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
  }

  handleClick = () => {
    alert(this.props.name);
  };

  render() {
    return Grump.createElement('button', {onClick: this.handleClick}, `Hello ${this.props.name}`);
  }
}

const Time = ({ time }) => {
  return Grump.createElement('div', null, `It is ${time} oclock`)
}

console.log(document.getElementById('app'));

const helloWorld = Grump.createElement(Hello, { name: 'Joe' }, null);
GrumpDOM.render(helloWorld, document.getElementById('app'));