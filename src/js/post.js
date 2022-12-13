const postData = async (apiData) => {
    fetch("http://localhost:8000/lang", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ apiData }),
    }).then((response) => response.json());
    console.log("Post Data Sent:");
    console.log(apiData);
};

export { postData };