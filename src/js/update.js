
const updateData = async (projectData) => {
  try {
      const res = await fetch(`http://localhost:8000/lang`)
      const data = await res.json();
      let agreement = data.projectData.agreement;
      let confidence = data.projectData.confidence;
      let irony = data.projectData.irony;
      
      li1.innerHTML = agreement;
      li2.innerHTML = confidence;
      li3.innerHTML = irony;
    } catch (err) {
      console.log(err)
    }
  };

  export { updateData };