const sum = require('./submitForm')

test('update data gets called', async () => {
    expect(sum(updateData)).toBe(true);
}) 