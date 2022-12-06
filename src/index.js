import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

import { postData } from "./js/post";
import { updateData } from "./js/update";

let button = document.getElementById("submitBtn");
let formInput = document.getElementById("name");
const apiKey = process.env.API_KEY;
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";

let apiData;
let projectData = { agreement: "", confidence: "", irony: "" };

const submitForm = async (e) => {
  await cloudData();

  postData(projectData);

  updateData(projectData);

};

const cloudData = async () => {
  try {
    let formInputValue = formInput.value;

    // Parameters for the fetch request
    const formdata = new FormData();
    formdata.append("key", apiKey);
    formdata.append("txt", formInputValue);
    formdata.append("lang", "en");

    // The fetch request
    const res = await fetch(baseURL, {
      method: "POST",
      body: formdata,
      redirect: "follow",
    });

    // Messing with data
    const data = await res.json();
    apiData = data;
    if (apiData) {
      projectData.agreement = apiData.agreement;
      projectData.confidence = apiData.confidence;
      projectData.irony = apiData.irony;
      console.log(apiData);
      return apiData;
    } else {
      console.log("this code doesnt exist bro");
    }
  } catch (err) {
    return `Failed ${err}`;
  }
};


button.addEventListener('click', () => {
  submitForm();
  handleSubmit();
})



function handleSubmit() {
  
  // check what text was put into the form field
  let formText = document.getElementById('name').value
  
  checkForName(formText)
  
  console.log("::: Form Submitted :::")
  
}


function checkForName(inputText) {
  console.log("::: Running checkForName :::", inputText);
  let names = [
    "Picard",
    "Janeway",
    "Kirk",
    "Archer",
    "Georgiou"
  ]
  
  if(names.includes(inputText)) {
    alert("Welcome, Captain!")
  }
}



