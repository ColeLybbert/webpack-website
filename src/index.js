import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/resets.scss";

const apiKey = "1d319e9eef10d4332f9a12cd948d7890";
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
let myForm = document.getElementById("inputForm");
let button = document.getElementById("submitBtn");
let formInput = document.getElementById("name");
let formInputValue = formInput.value;

// Parameters for the fetch request
const formdata = new FormData();
formdata.append("key", apiKey);
formdata.append("txt", "Kirk");
formdata.append("lang", "en");

const cloudData = async () => {
  try {
    // The fetch request
    const res = await fetch("https://api.meaningcloud.com/sentiment-2.1", {
      method: "POST",
      body: formdata,
      redirect: "follow",
    });
    // Messing with data
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    return `Failed ${err}`;
  }
};

// Telling cloudData to work on button click
button.addEventListener("click", () => {
  cloudData();
});
