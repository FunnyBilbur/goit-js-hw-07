const NameInput = document.querySelector('#name-input');
const NameOutput = document.querySelector('#name-output');

NameInput.addEventListener('input', (event) => {
    // console.log('Changed');
    NameOutput.textContent = event.currentTarget.value;
    if (event.currentTarget.value.replace(/\s+/g, '').trim() == '') {
        NameOutput.textContent = 'Anonymous';
    }
    // console.dir(NameInput);
});