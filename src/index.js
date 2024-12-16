import { homeContent } from "./loadHome";
import image from "./image.jpg";
import "./styles.css";

document.querySelector("#home").addEventListener("click", (event) => {
  homeContent(image);
  event.target.disabled = true;
});
