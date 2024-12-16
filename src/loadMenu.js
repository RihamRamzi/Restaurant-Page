const loadMenu = function () {
  const content = document.querySelector("#content");
  const menu1 = document.createElement("div");
  menu1.classList.add("card");

  const h1 = document.createElement("h1");
  h1.textContent = `Razor Hoppers`;
  menu1.appendChild(h1);

  const p1 = document.createElement("p");
  p1.textContent = `Beware it might slice ur tongue with its flavor`;
  menu1.appendChild(p1);

  const price = document.createElement("p");
  price.textContent = `PRICE: 30$`;
  menu1.appendChild(price);
  content.appendChild(menu1);

  const menu2 = document.createElement("div");
  menu2.classList.add("card");

  const h2 = document.createElement("h1");
  h2.textContent = `Slimy Bread`;
  menu2.appendChild(h2);

  const p2 = document.createElement("p");
  p2.textContent = `Chew until u fell its enough, But u need some strong teeth`;
  menu2.appendChild(p2);

  const price2 = document.createElement("p");
  price2.textContent = `PRICE: 20$`;
  menu2.appendChild(price2);
  content.appendChild(menu2);
};

export { loadMenu };
