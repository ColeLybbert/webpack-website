//YOU CANNOT GET THE VALUE ON LOAD! IT HAS TO BE ON SUBMIT!!!!
let formInput = formInput.value;
const apiKey = process.env.API_KEY;
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";

const submitForm = async (formInput) => {
    //in cloud data we return an object with the data we want and assign it here to pass it to next
    //function below it waiting
  let apiData = await cloudData(formInput);
  //make our POST to our lang API route
  await postData(apiData);
//fetch it and return the data back to our index file
 return updateData();
};
const cloudData = async () => {
  try {

    // Parameters for the fetch request
    const formdata = new FormData();
    formdata.append("key", apiKey);
    formdata.append("txt", formInput);
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
    let projectData = {};
    if (apiData) {
      projectData.agreement = apiData.agreement;
      projectData.confidence = apiData.confidence;
      projectData.irony = apiData.irony;
      console.log("hi");
      return projectData;
    } else {
      console.log("this code doesnt exist bro");
    }
  } catch (err) {
    return `Failed ${err}`;
  }
};

const postData = async (projectData) => {
  fetch("http://localhost:8000/lang", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ projectData }),
  }).then((response) => response.json());
};

const updateData = async () => {
  try {
    const res = await fetch(`http://localhost:8000/lang`);
    const data = await res.json();
    return data;

  } catch (err) {
    return console.log(err);
  }
};

export { submitForm };
