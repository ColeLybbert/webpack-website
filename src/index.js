import  handleSubmit  from "./js/formHandler"
import  checkForName  from "./js/nameChecker"

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

const apiData = async () => {
    await cloudData();
}


const cloudData = async () => {
    try {
        const formdata = new FormData();
        formdata.append("key", apiKey);
        formdata.append("txt", formInput.innerHTML);
        formdata.append("lang", "en");
        
        const requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        }
        
        const res = await fetch(baseURL, requestOptions)
        const data = await res.json();
        console.log(data);
        return data;
    } catch (err) {
        return `Failed ${err}`;
    }
}

button.addEventListener("click", () => {
    apiData()
  });
