const apiKey = process.env.API_KEY;
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";

export const cloudData = async (formInput) => {
    try {
      // Parameters for the fetch request
      let newForm = createForm(formInput);

      // The fetch request
      const res = await fetch(baseURL, {
        method: "POST",
        body: newForm,
        redirect: "follow",
      });

      const data = await res.json();
      return data;
    } catch (err) {
      return `API call Failed: ${err}`;
  }
};
export let createForm = async(formInput)=>{
  const formdata = new FormData();
  formdata.append("key", apiKey||666);
  formdata.append("txt", formInput);
  formdata.append("lang", "en");
  return formdata;
}