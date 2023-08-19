const textElement = document.getElementById("text");
const inputElement = document.getElementById("input");

inputElement.addEventListener("input", () => {
  textElement.style.display = "none";
});