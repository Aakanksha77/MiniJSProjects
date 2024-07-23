const form = document.querySelector('form');

// As we dont want to send values on server . So we have to stop . and that is done this below 2 line.

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result')


    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = "Please give a valid height";
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Please give a valid Weight";
    } else {
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
    }
});