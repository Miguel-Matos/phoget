import './input.css';
import { navbar } from './content';
import { main } from './content';
import { foot } from './content';
import { home } from './home';
import { menu } from './menu';


const navbar = navbar.nav;
const homepage = main(home.title, home.about);
const menupage = main(menu.title, menu.about);
const footer = foot();

document.body.appendChild(navbar);
document.body.appendChild(homepage);


  navbar.menu.addEventListener('click', () => {
    document.body.removeChild(homepage);
    menupage.insertAdjacentElement('afterbegin', navbar);
  });



document.body.appendChild(footer);