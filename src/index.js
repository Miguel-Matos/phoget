import './input.css';
import { navbar } from './content';
import { main } from './content';
import { foot } from './content';
import { home } from './home';
import { menu } from './menu';

document.body.appendChild(navbar.nav);

const content = (() => {
  navbar.menu.addEventListener('click', () => {
    console.log('yes');
  });
})();

document.body.appendChild(main(home.title, home.about));
document.body.appendChild(foot());