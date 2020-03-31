const array = ["red", "white", "black", "blue", "green"];
const app = document.getElementById("app");

const found = array.findIndex(item => {
  return item[0] === "b";
});

app.insertAdjacentHTML("beforeend", "Index of first matching element: " + found);
