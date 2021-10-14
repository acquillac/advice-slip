// grabbing a random peice of advice
document.getElementById('button1').addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        // console.log(data.slip.advice);
        const advice = data.slip.advice;
        document.getElementById('output').innerHTML = `<li>${advice}</li>`;
    })    
})


// searching for advice with keyword
document.getElementById('button2').addEventListener('click', () => {   

    // getting search input
    const input = document.getElementById('search-input').value;

    // adding search to the url
    const url = 'https://api.adviceslip.com/advice/search/' + input;
    
    // fetching url
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const advice = data.slips[0].advice;
        document.getElementById('search-output').innerHTML = `<li>${advice}</li>`;
    })
    .catch(document.getElementById('search-output').innerHTML = 
    `<li>Sorry We couldn't find a result for ${input}</li>`);    
})
