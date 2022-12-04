export default function handleSubmit() {
  
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    
    checkForName(formText)
    
    console.log("::: Form Submitted :::")
    
}

