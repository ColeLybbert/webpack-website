const postData = async (projectData) => {
    fetch("http://localhost:8000/lang", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({ projectData }),
      })
      .then((response) => response.json())
      return projectData;
  };
  
  export { postData };