const apiKey = process.env.API_KEY;
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";

export const cloudData = async (formInput) => {
    try {
      let newForm = await createForm(formInput);
      console.log(newForm)

      // The fetch request
      const res = await fetch(baseURL, {
        method: "POST",
        body: newForm,
        redirect: "follow",
      });
      const apiData = await res.json();
      console.log(apiData);
      return apiData;
    } catch (err) {
      return `API call Failed: ${err}`;
  }
};
export let createForm = async(formInput)=>{
  const formdata = new FormData();
  formdata.append("key", `${apiKey}`);
  formdata.append("txt", formInput);
  formdata.append("lang", "en");
  return formdata;
}