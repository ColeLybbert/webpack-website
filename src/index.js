

import { cloudData } from "./js/cloud";

let button = document.getElementById("submitBtn");

const submitForm = async () => {
  //why assign this in submitForm AND nameHandle? If both use it, make it global!
  // DRY - DONT REPEAT YOURSELF principle 
  let formInput = document.getElementById("name").value;
  //in cloud data we return an object with the data we want and assign it here to pass it to next
  //function below it waiting
  await cloudData(formInput);

};



export function nameHandle() {
  // check what text was put into the form field
 let formText = document.getElementById("name").value;

  return checkForName(formText);
}

export function checkForName(inputText) {return inputText === "Kirk"?"welcome Cap!":"Hello Civilian!"}

document.addEventListener('DOMContentLoaded', function () {
  button.addEventListener("click", () => {
    nameHandle();
    submitForm();
  });
});