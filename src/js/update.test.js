/**
 * @jest-environment jsdom
 */


let apiData = ["agreement", "confidence", "irony", "model", "score_tag"];

test('If Data gets shown', async () => {
    expect(apiData).toBeDefined();
});