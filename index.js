import { staff } from "./data.js";
import { DrawCard } from "./constructor.js";

const secondSection = document.getElementById("secondSection");

render();

function render() {
  for (let i in staff) {
    let infoBox = new DrawCard(staff[i]);
    infoBox.getHtml();
  }
}
