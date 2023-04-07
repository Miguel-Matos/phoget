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

const main = (page) => {
  const main = document.createElement('main');
  main.classList.add('main');
  const phoget = document.createElement('h1');
  phoget.textContent = "Phoget";
  const intro = document.createElement('h2');
  intro.textContent = page;
  main.appendChild(phoget);
  main.appendChild(intro);
  return main;
};

export {navbar, main};
