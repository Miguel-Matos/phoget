const navbar = () => {
  const nav = document.createElement('nav');
  const phoget = document.createElement('h1');
  phoget.textContent = "Phoget";

  const home = document.createElement('a');
  home.href = "#";
  home.textContent = "Home";

  const menu = document.createElement('a');
  menu.href = "#";
  menu.textContent = "Menu";

  const contact = document.createElement('a');
  contact.href = "#";
  contact.textContent = "Contact";

  nav.appendChild(phoget);
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  nav.classList.add('navbar');

  return nav;
}

const main = () => {
  const main = document.createElement('main');
  const intro = document.createElement('h2');
  intro.textContent = "Welcome!";
  main.appendChild(intro);
  return main;
}

export {navbar, main};
