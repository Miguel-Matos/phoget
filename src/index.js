import './input.css';
import { navbar } from './content';
import { main } from './content';
import { foot } from './content';
import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';

const page = (() => {
  const core = document.createElement('div');
  const navArea = navbar.nav;
  const homepage = main(home.title, home.about);
  const menupage = main(menu.title, menu.about);
  const contactpage = main(contact.title, contact.about);
  const footer = foot();

  function pageSwitch(load) {
    core.removeChild(core.firstChild);
    core.appendChild(load);
  }

  navbar.home.addEventListener('click', () => {
    pageSwitch(homepage);
  });

  navbar.menu.addEventListener('click', () => {
    pageSwitch(menupage);
  });
  
  navbar.contact.addEventListener('click', () => {
    pageSwitch(contactpage);
  });

  document.body.appendChild(navArea);
  document.body.appendChild(core);
  core.appendChild(homepage);
  document.body.appendChild(footer);
})();

