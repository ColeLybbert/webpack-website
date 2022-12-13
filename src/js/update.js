let li1 = document.getElementById('li1');
let li2 = document.getElementById('li2');
let li3 = document.getElementById('li3');

const updateData = async () => {
    try {
      const res = await fetch(`http://localhost:8000/lang`);
      const data = await res.json();
      console.log("Updata Data received:")
      console.log(data);

      let agreement = data.apiData.agreement;
      let confidence = data.apiData.confidence;
      let irony = data.apiData.irony;

      li1.innerHTML = agreement;
      li2.innerHTML = confidence;
      li3.innerHTML = irony;
  
    } catch (err) {
      return console.log(err);
    }
};

export { updateData };