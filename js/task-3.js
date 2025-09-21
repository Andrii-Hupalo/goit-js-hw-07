const myInput = document.getElementById("name-input");
const outputSpan = document.getElementById("name-output");

myInput.addEventListener("input", () => {
  outputSpan.textContent = myInput.value.trim() || "Anonymous";
});
