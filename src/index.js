import './input.css';
import { navbar } from './content';
import { main } from './content';
import { foot } from './content';
import { home } from './home';
import { menu } from './menu';

const core = document.createElement('div');

const navArea = navbar.nav;
const homepage = main(home.title, home.about);
const menupage = main(menu.title, menu.about);
const footer = foot();

document.body.appendChild(navArea);
document.body.appendChild(core);
core.appendChild(homepage);


  navbar.menu.addEventListener('click', () => {
    core.removeChild(homepage);
    core.appendChild(menupage);
  });



document.body.appendChild(footer);