let button = document.getElementById("submitBtn");
let formInput = document.getElementById("name");
const apiKey = "1d319e9eef10d4332f9a12cd948d7890";
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";

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

