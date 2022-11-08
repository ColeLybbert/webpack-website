import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/resets.scss'

const apiKey = "1d319e9eef10d4332f9a12cd948d7890";
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
let myForm = document.getElementById('inputForm')
let button = document.getElementById("submitBtn");
let formInput = document.getElementById("name");
let formInputValue = formInput.value;

const cloudData = async () => {
  try {
    // Parameters for the fetch request
    const formdata = new FormData();
    formdata.append("key", apiKey);
    formdata.append("txt", formInputValue);
    formdata.append("lang", "en");
    // The fetch request
    const res = await fetch(baseURL, {
      method: 'POST',
      body: FormData(),
      redirect: 'follow'
    })
    // Messing with data
    const data = await res.json();
    console.log(data)
    return data;
  } catch (err) {
    return `Failed ${err}`;
  }
}

// Telling cloudData to work on button click
button.addEventListener("click", () => {
  cloudData()
  });
