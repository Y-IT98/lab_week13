const Div_event = document.querySelectorAll(".original-container div");
const Area_copied = document.querySelector(".copy-container");

//*// Clone
Div_event.forEach((element) =>
  element.addEventListener("click", (evt) => {
    let cloneMaterial = evt.target.parentElement.outerHTML;
    Area_copied.insertAdjacentHTML("beforeend", cloneMaterial);
  })
);

/* Delete button*/
const button_reset = document.querySelector("button");

button_reset.addEventListener("click", () => {
  Area_copied.innerHTML = "";
});
