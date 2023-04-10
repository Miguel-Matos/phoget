import emimg from '../src/img/em.jpg';

const contact = (() => {
  const title = "Contact";
  const about = document.createElement('div');
  const contact = document.createElement('p');
  contact.classList.add('description');
  contact.innerHTML = "This is a portfolio project by Miguel Matos. Dynamically created using mostly Webpack and Javascript."
  const em = document.createElement('p');
  em.innerHTML = "Inspired by the love of my life, Em.";

  const img = document.createElement('img');
  img.src = emimg;
  img.classList.add('img');

  const website = document.createElement('a');
  website.href = 'https://www.matosmiguel.com/';
  website.innerHTML = "Click to visit my personal website!";
  website.setAttribute('id', 'link');

  about.appendChild(contact);
  about.appendChild(em);
  about.appendChild(img);
  about.appendChild(website);

  return {title, about};
})();

export {contact}