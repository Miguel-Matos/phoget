import './input.css';
import { navbar } from './content';
import { main } from './content';
import { foot } from './content';
import { home } from './home';
import { menu } from './menu';

document.body.appendChild(navbar.nav);

const homepage = main(home.title, home.about);
const menupage = main(menu.title, menu.about);
const footer = foot();
document.body.appendChild(homepage);


  navbar.menu.addEventListener('click', () => {
    document.body.removeChild(homepage);
    document.body.removeChild(footer);
    document.body.appendChild(menupage);
    document.body.appendChild(footer);
  });



document.body.appendChild(footer);