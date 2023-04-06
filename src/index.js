import './input.css';
import content from './content';



function component() {
  const element = document.createElement('div');
  element.textContent = content("Home");
  return element;
}

document.body.appendChild(component());