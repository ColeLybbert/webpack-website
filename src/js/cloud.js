const apiKey = process.env.API_KEY;
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";

export const cloudData = async (formInput) => {
    try {
      let newForm = createForm(formInput);

      // The fetch request
      const res = await fetch(baseURL, {
        method: "POST",
        body: formdata,
        redirect: "follow",
      });
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      return `API call Failed: ${err}`;
  }
};
export let createForm = async(formInput)=>{
  const formdata = new FormData();
  formdata.append("key", apiKey);
  formdata.append("txt", formInput);
  formdata.append("lang", "en");
  return formdata;
}