const headerEl = document.getElementById('dynamic-head');

function changeHeader() {
    const inputValue = document.getElementById('search-input').value;
    
    headerEl.textContent = inputValue || "Hello World!";
    console.log(inputValue);
}