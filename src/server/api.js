const apiKey = "1d319e9eef10d4332f9a12cd948d7890";
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
let myForm = document.getElementById("inputForm");
let button = document.getElementById("submitBtn");
let formID = document.getElementById("name");

const formData = new FormData();
formData.append("key", apiKey);
formData.append("txt", formID.value);
formData.append("lang", "en");

const requestOptions = {
    method: 'Post',
    body: formData,
    redirect: 'follow'
};

button.addEventListener('click', () => {
    const response = fetch(baseURL, requestOptions)
        .then(response => ({
            status: response.status,
            body: response.json()
        }))
        .then(({ status, body}) => console.log(status, body))
        .catch(error => console.log('error', error));
});
