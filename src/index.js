import { loadHome } from "./loadHome";
import { loadMenu } from "./loadMenu";
import { loadAbout } from "./loadAbout";
import image from "./image.png";
import "./styles.css";

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

homeBtn.addEventListener("click", () => {
  content.textContent = "";
  loadHome(image);
  homeBtn.disabled = true;
  menuBtn.disabled = false;
  aboutBtn.disabled = false;
});

menuBtn.addEventListener("click", () => {
  content.textContent = "";
  loadMenu();
  menuBtn.disabled = true;
  homeBtn.disabled = false;
  aboutBtn.disabled = false;
});

aboutBtn.addEventListener("click", () => {
  content.textContent = "";
  loadAbout();
  aboutBtn.disabled = true;
  menuBtn.disabled = false;
  homeBtn.disabled = false;
});
