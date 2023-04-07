import './input.css';
import { navbar } from './content';
import { main } from './content';
import { foot } from './content';
import { home } from './home';
import { menu } from './menu';

document.body.appendChild(navbar());
document.body.appendChild(main(menu.title, menu.about));
document.body.appendChild(foot());