const cloudData = require('./cloud')
const formInput = "Kirk"

test('If Data Gets Fetched with CloudData', async () => {
    expect(cloudData(formInput)).toEqual({
        "agreement":"agreement",
        "confidence" :"certainty",
        "irony" : "whatever value"
    });
}) 