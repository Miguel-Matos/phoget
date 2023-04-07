import './input.css';
import { navbar } from './content';
import { main } from './content';
import { foot } from './content';
import { home } from './home';

document.body.appendChild(navbar());
document.body.appendChild(main(home.title, home.about));
document.body.appendChild(foot());