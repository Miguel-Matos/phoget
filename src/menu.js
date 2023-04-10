const item = (name, price, detail, src) => {
  const foodName = document.createElement('h3');
  foodName.textContent = name;
  const cost = document.createElement('p');
  cost.classList.add('cost');
  cost.textContent = "￥" + price;
  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = detail;
  const image = document.createElement('img');
  image.src = src;
  image.classList.add('img');
  return {foodName, cost, description, image};
};

const menu = (() => {
  const title = "Menu";
  const about = document.createElement('div');

  function adding (name, price, detail, src) {
    const arr = [name, price, detail, src];
    for (let i = 0; i < 4; i++) {
      about.appendChild(arr[i]);
    }
  };

  const bahnmi = item("Bahn Mi", "699", "Vietnamese people consume 23 daily. Fresh roasted bread with garden grown vegetables and meat of your choosing.", "../src/img/bahnmi.jpg");
  adding(bahnmi.foodName, bahnmi.cost, bahnmi.description, bahnmi.image);

  const pho = item("Pho", "799", "The signature dish of our restaurant. Guaranteed to keep you full all day. No other explanation needed.", "../src/img/pho.jpg");
  adding(pho.foodName, pho.cost, pho.description, pho.image);

  const rolls = item("Spring Rolls", "399", "A special blend of seafood and vegetables, guaranteed to keep you coming back for more!", "../src/img/springroll.jpg");
  adding(rolls.foodName, rolls.cost, rolls.description, rolls.image);

  return {title, about};
})();


export {menu}; 