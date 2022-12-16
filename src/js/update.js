export const updateData = async (apiData) => {
    let results = [apiData.agreement, apiData.confidence, apiData.irony, apiData.model, apiData.score_tag];
    let ul = document.getElementById('results');
    results.forEach((result) => {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = result;
    });
};
