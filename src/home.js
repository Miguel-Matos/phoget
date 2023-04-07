const home = (() => {
  const title = "Home";
  const about = document.createElement('div');
  const p1 = document.createElement('p');
  p1.textContent = "Your go-to place for Vietnamese food!";
  const p2 = document.createElement('p');
  p2.textContent = "Founded in 2023 in Kobe, Japan, this is the first Vietnamese delivery restaurant. All you have to do is order from the menu, add we will deliver it to you!";
  const img = document.createElement('img');
  img.src = "../src/img/background2.jpg";
  img.classList.add('img');

  about.appendChild(p1);
  about.appendChild(p2);
  about.appendChild(img);
  return {title, about};
})();

export {home}; 