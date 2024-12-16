const homeContent = function (src) {
  const h1 = document.createElement("h1");
  h1.textContent = `Welcome to MasMrCHEF`;
  document.body.appendChild(h1);

  const image = document.createElement("img");
  image.src = src;
  image.style.width = "300px";
  document.body.appendChild(image);
  console.log(image);

  const para1 = document.createElement("p");
  para1.textContent = `We don't talk we work. Try out the most unique dishes
                        different on all aspects, no meat no veg. unique taste,
                        no talk only mop mop the MasMrChef mop`;
  document.body.appendChild(para1);

  const para2 = document.createElement("p");
  para2.textContent = `Open Monday to Thursday, 24hours `;
  para2.style.fontWeight = "900";
  document.body.appendChild(para2);

  const para3 = document.createElement("p");
  para3.textContent = `King Street Burger Town, Loli Street `;
  para3.style.fontWeight = "900";
  document.body.appendChild(para3);
};

export { homeContent };
