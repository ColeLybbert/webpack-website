function apiFunction () {

  let button = document.getElementById("submitBtn");
  let formInput = document.getElementById("name");
  const apiKey = "1d319e9eef10d4332f9a12cd948d7890";
  const baseURL = "https://api.meaningcloud.com/sentiment-2.1";

  let apiData;
  let projectData = { data: undefined}

  const sumbitForm = async (e) => {
    await cloudData()

    postData()
  }
  
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
        projectData.data = apiData;
        return apiData;
      } catch (err) {
        return `Failed ${err}`;
      }
    };

    const postData = async () => {
      fetch("http://localhost:8081/lang", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectData })
      })
      .then((response) => response.json())
    }

    document.addEventListener("DOMContentLoaded", (event) => {
      myForm.addEventListener("submit", function (e) {
        e.preventDefault();
        sumbitForm();
      })
    })

    const updateData = async () => {
      try{
        let results = document.querySelector('#results').value;
        const res = await fetch('http://localhost:8081/lang');
        const data = await res.json();
        results = data;
      } catch (err) {
        return `Failed ${err}`;
      }
    }
};

export { apiFunction }