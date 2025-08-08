const headerEl = document.getElementById('dynamic-head');
const searchInputEl = document.getElementById('search-input');
const validStateEl = document.getElementById('valid-state');
const imgEl = document.getElementById('image');

const images = {
    cat: "img/cat.jpeg",
    dog: "img/dog.webp",
}

function checkIfValid() {
    const searchValue = searchInputEl.value.trim();
    const lowerCaseValue = searchValue.toLowerCase();
    //console.log(lowerCaseValue);

    // if (lowerCaseValue === 'valid') {
    //     validStateEl.textContent = 'Valid';
    //     validStateEl.style.color = 'green';
    // } else if (lowerCaseValue === '') {
    //     validStateEl.textContent = '';
    //     validStateEl.style.color = '';
    // } else {
    //     validStateEl.textContent = 'Invalid';
    //     validStateEl.style.color = 'red';
    // }   

    valid = false;
    for (const key in images) {
        if (lowerCaseValue === key) {
            valid = true;
        }
    }
    if (valid) {
        validStateEl.textContent = 'Valid';
        validStateEl.style.color = 'green';
        imgEl.src = images[lowerCaseValue];
    } else if (lowerCaseValue === '') {
        validStateEl.textContent = '';
        validStateEl.style.color = '';
        imgEl.src = '';
    } else {
        validStateEl.textContent = 'Invalid';
        validStateEl.style.color = 'red';
        imgEl.src = '';
    }
}