import { checkForName } from "./js/nameChecker";
import { handleSubmit } from "./js/formHandler";

import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/resets.scss";

export {
  checkForName,
  handleSubmit,
}

let myForm = document.getElementById("inputForm");
let button = document.getElementById("submitBtn");
let formInput = document.getElementById("name");
const apiKey = "1d319e9eef10d4332f9a12cd948d7890";
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";

let apiData;
let projectData = { agreement: "", confidence: "", irony: "" };

const sumbitForm = async (e) => {
  await cloudData();

  postData();
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
      console.log(apiData)
      return apiData;
    } else {
      console.log("this code doesnt exist bro");
    }
  } catch (err) {
    return `Failed ${err}`;
  }
};

const postData = async () => {
  fetch("http://localhost:8000/lang", {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({ projectData }),
    })
    .then((response) => response.json())
};


button.addEventListener('click', () => {
  sumbitForm()
})



