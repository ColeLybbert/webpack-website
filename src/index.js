import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

import { submitForm } from './js/submitForm'

let button = document.getElementById("submitBtn");
let formInput = document.getElementById("name").value;
const apiKey = process.env.API_KEY;
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";

let apiData;
let projectData = { agreement: "", confidence: "", irony: "" };

button.addEventListener("click", () => {
  // handleSubmit();
  submitForm(formInput);
});
//this is wrong, it doesn't actually handle any form.
// function handleSubmit() {
//   // check what text was put into the form field
//   let formText = document.getElementById("name").value;

//   checkForName(formText);

//   console.log("::: Form Submitted :::");
// }

function checkForName(inputText) {
  console.log("::: Running checkForName :::", inputText);
  let names = ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"];

  if (names.includes(inputText)) {
    alert("Welcome, Captain!");
  }
}