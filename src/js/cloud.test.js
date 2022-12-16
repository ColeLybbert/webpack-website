/**
 * @jest-environment jsdom
 */

const {createForm} = require('./cloud')
const formInput = "Kirk";
<<<<<<< HEAD
const apiKey = `${process.env.API_KEY}`;
test('If Data Gets Fetched with CloudData', async () => {
=======
test('If the form gets created', async () => {
>>>>>>> 0b386f3f53b9833a3b1f7d3c9b2055aa4277ba55
    const formdata = await createForm(formInput);
    expect(formdata).toBeDefined();
    
}) 
test('If FormData entries are strings' ,async () => {
    const formdata = await createForm(formInput);
    for (const pair of formdata.entries()) {
        let key = pair[0];
        let value = pair[1];
        expect(typeof key).toBe('string');
        expect(typeof value).toBe('string');
      }
})
test('If the key field is correct', async() =>{
    const formdata = await createForm(formInput);
    expect(formdata.has('key')).toBe(true)
    expect(formdata.get('key')).toMatch(apiKey)
})
test('If the txt field is correct', async() =>{
    const formdata = await createForm(formInput);
    expect(formdata.has('txt')).toBe(true)

})
test('If the lang field is correct', async() =>{
    const formdata = await createForm(formInput);
    expect(formdata.has('lang')).toBe(true)
})