let numberInput = document.getElementById('number');
let textInput = document.getElementById('text');
const submitBtn = document.getElementById('submitBtn');
const form = document.getElementById('settings');
const treeBox = document.getElementById('treeBox');



function createTree() {
    treeBox.innerText = '';
    let symbol = textInput.value;
    let height = numberInput.valueAsNumber;
    for (let i=1; i <= height; i++) {
        let tree = document.createElement('div');
        tree.textContent = '\u00A0'.repeat(height - i) + symbol.repeat(2 * i -1) ;
        document.getElementById('treeBox').append(tree);
        console.log(tree.textContent);
    }
}

form.addEventListener('submit', function (e) {
        e.preventDefault();
        createTree();
    })