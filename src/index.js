import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

import { cloudData } from "./js/cloud";

let button = document.getElementById("submitBtn");

const submitForm = async () => {
  let formInput = document.getElementById("name").value;
  //in cloud data we return an object with the data we want and assign it here to pass it to next
  //function below it waiting
  let apiData = await cloudData(formInput);

  await postData(apiData);

  updateData(apiData)
};

button.addEventListener("click", () => {
  nameHandle();
  submitForm();
});
function nameHandle() {
  // check what text was put into the form field
 let formText = document.getElementById("name").value;

  checkForName(formText);

  console.log("::: Form Submitted :::");
}

function checkForName(inputText) {
  console.log("::: Running checkForName :::", inputText);
  let names = ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"];

  if (names.includes(inputText)) {
    alert("Welcome, Captain!");
  }
}