/**
 * @jest-environment jsdom
 */
//bring in the index file function I want to test
const {nameHandle} = require('./index')
//There is no HTML, just a fake jsDOM to manipulate.
//Since the nameHandle function looks for this element and its input
//we create one, add the id the function is looking for
//and append it to the document.body of the fake browser JEST 
//makes to test dom manipulation.

//create mock user input (because no HTML) in jsdom mock test env
let formText = document.createElement('input');
//add the ID that nameHandle() looks for (go look in index.js file line 21)
formText.id = 'name';
//append this mock user input to the mock DOM so nameHandle() doesnt get undefined
document.body.appendChild(formText);


test("if name is handled properly",async ()=>{
    //since we are in control of the input through js, we first test captain callback
    //set formText input value to Kirk
    formText.value = "Kirk";
    //assign a variable to hold whatever nameHandle() returns
    let captainString = nameHandle();
    //use jest expect().toEqual to test the exact string we hope for
    expect(captainString).toEqual("welcome Cap!");
    //change the mocked value again to the non-captain string
    formText.value = "Douche";
    //assign a new variable to hold the return value of nameHandle()
    let civString = nameHandle();
    //test it again with jest
    expect(civString).toEqual("Hello Civilian!");
})