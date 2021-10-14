document.getElementById('button').addEventListener('click', () => {
    
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        // console.log(data.slip.advice);
        const advice = data.slip.advice;
        document.getElementById('output').innerHTML = `<li>${advice}</li>`;
    })    
})
