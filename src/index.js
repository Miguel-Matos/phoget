import './input.css';
import { navbar } from './content';
import { main } from './content';
import home from './home';

document.body.appendChild(navbar());
document.body.appendChild(main(home()));