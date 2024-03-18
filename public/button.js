let btnClear = document.querySelector('button');
let onClicks = document.querySelectorAll('onclick');
btnClear.addEventListener('click', ()=>{
    onClicks.forEach(onClick => onClick.value = '');
});
