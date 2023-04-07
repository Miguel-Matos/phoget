const navbar = () => {
  const nav = document.createElement('nav');
  const home = document.createElement('a');
  home.href = "#";
  home.textContent = "Home";

  const menu = document.createElement('a');
  menu.href = "#";
  menu.textContent = "Menu";

  const contact = document.createElement('a');
  contact.href = "#";
  contact.textContent = "Contact";

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  nav.classList.add('navbar');

  return nav;
}

const main = (page, cnt) => {
  const main = document.createElement('main');
  main.classList.add('main');
  const phoget = document.createElement('h1');
  phoget.textContent = "Phoget";
  const content = document.createElement('div');
  content.classList.add('content');
  const intro = document.createElement('h2');
  intro.classList.add('intro');
  intro.textContent = page;
  const info = document.createElement('p');
  info.textContent = cnt;

  content.appendChild(intro);
  content.appendChild(info);
  main.appendChild(phoget);
  main.appendChild(content);
  return main;
};

export {navbar, main};
