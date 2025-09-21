const categories = document.querySelectorAll(`.item`);
const itemCount = categories.length;
console.log(`Number of categories: ${itemCount}`);
categories.forEach((categori) => {
  const categoryName = categori.querySelector("h2").textContent;
  const nestedList = categori.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${nestedList}`);
});
