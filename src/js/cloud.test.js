/**
 * @jest-environment jsdom
 */
function FormDataMock() {
    this.append = jest.fn();
  }
  
  global.FormData = FormDataMock
const {createForm} = require('./cloud')
const formInput = "Kirk"

test('If Data Gets Fetched with CloudData', async () => {
    const data = await createForm(formInput);
    expect(data).toBe({
        "agreement":"agreement",
        "confidence" :"certainty",
        "irony" : "whatever value"
    });
}) 