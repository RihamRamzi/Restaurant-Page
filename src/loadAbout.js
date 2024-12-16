const loadAbout = function () {
  const content = document.querySelector("#content");
  const p = document.createElement("p");
  p.textContent = `Newly found from nowhere, since 1988. Premium quality cuisine `;
  p.style.fontSize = "5rem";
  content.appendChild(p);
};

export { loadAbout };
