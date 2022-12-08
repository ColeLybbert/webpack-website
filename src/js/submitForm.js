import { cloudData } from "../index";
import { postData } from "../index";
import { updateData } from "../index"; 

const submitForm = async () => {
    await cloudData();
  
    postData();
  
    updateData();
};

 { submitForm };