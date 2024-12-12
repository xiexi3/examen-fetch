import "./style.css";
import { api_categories, options_hm, url_hm} from './helpers/api';
import { createCategoryOptions, createCards } from './helpers/domHelper';
import { parserCategoryToClass, parserProductToClass } from "./helpers/promiseHelper";


const select = document.getElementById("select-categories");
const cardContainer = document.querySelector(".card_container");

const fetchAndSetCategories = async (url) => {
  try {
    const response = await fetch(url);
    const categories = await response.json();

    const categoryClasses = await parserCategoryToClass(categories);
    
    const selectSourceTag = createCategoryOptions(categoryClasses);

    selectSourceTag.addEventListener("change", (event) => {
      let url = event.target.value === "Select" ? "" : `${url_hm}categories=${event.target.value}`;
      getResultsByCategory(url, options_hm);
    });
    
  } catch (error) {
    console.error(error);
  }
}

const getResultsByCategory = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const results = await response.json();

    const productClasses = await parserProductToClass(results);

    cardContainer.innerHTML = "";
    cardContainer.append(...createCards(productClasses));
  } catch (error) {
    console.error(error);
  }
};

fetchAndSetCategories(api_categories);
