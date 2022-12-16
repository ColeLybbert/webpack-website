import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

import { cloudData } from "./js/cloud";
import { updateData } from "./js/update";

let button = document.getElementById("submitBtn");

const submitForm = async () => {
  let formInput = document.getElementById("name").value;
  let apiData = await cloudData(formInput);
  updateData(apiData);
};

export function nameHandle() {
 let formText = document.getElementById("name").value;
  alert(checkForName(formText))
  return checkForName(formText);
}

export function checkForName(inputText) {return inputText === "Kirk"?"welcome Cap!":"Hello Civilian!"}

document.addEventListener('DOMContentLoaded', function () {
  button.addEventListener("click", () => {
    nameHandle();
    submitForm();
  });
});