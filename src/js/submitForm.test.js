const submitForm = require('./submitForm')
const stubbedInputValue = "dude";
test('update data gets called', async () => {
    expect(submitForm(stubbedInputValue)).toEqual({
        "agreement":"agreement here",
        "certainty" :"certainty",
        "whatever" : "whatever value"
    });
}) 