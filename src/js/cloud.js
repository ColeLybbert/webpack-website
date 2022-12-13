const apiKey = process.env.API_KEY;
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";

const cloudData = async (formInput, apiData) => {
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
        console.log("CloudData fetched:")
        console.log(projectData);
        return projectData;
      } else {
        console.log("this code doesnt exist bro");
      }
    } catch (err) {
      return `Failed ${err}`;
    }
  };

export { cloudData };