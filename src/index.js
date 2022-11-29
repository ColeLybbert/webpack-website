import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
export {
  checkForName,
  handleSubmit,
}

let button = document.getElementById("submitBtn");
let formInput = document.getElementById("name");
const apiKey = process.env.API_KEY;
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
let li1 = document.getElementById("li1")
let li2 = document.getElementById("li2")
let li3 = document.getElementById("li3")

let apiData;
let projectData = { agreement: "", confidence: "", irony: "" };

const submitForm = async (e) => {
  await cloudData();

  postData();

  updateData();
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

const postData = async () => {
  fetch("http://localhost:8000/lang", {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({ projectData }),
    })
    .then((response) => response.json())
};



const updateData = async () => {
  try {
    const res = await fetch(`http://localhost:8000/lang`)
    const data = await res.json();
    let agreement = data.projectData.agreement;
    let confidence = data.projectData.confidence;
    let irony = data.projectData.irony;
    
    li1.innerHTML = agreement;
    li2.innerHTML = confidence;
    li3.innerHTML = irony;
  } catch (err) {
    console.log(err)
  }
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

function handleSubmit() {
  
  // check what text was put into the form field
  let formText = document.getElementById('name').value
  
  checkForName(formText)
  
  console.log("::: Form Submitted :::")
  
}

button.addEventListener('click', () => {
  handleSubmit();
  submitForm();
})

