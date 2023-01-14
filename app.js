let numberInput = document.getElementById('number');
let textInput = document.getElementById('text');
const submitBtn = document.getElementById('submitBtn');
const treeBox = document.getElementById('treeBox');
const form = document.getElementById('settings');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('YOU CLICKED ME');
})