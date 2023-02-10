let numberInput = document.getElementById('number');
let textInput = document.getElementById('text');
const form = document.getElementById('settings');
const treeBox = document.getElementById('treeBox');

function createTree() {
    treeBox.innerText = '';
    let symbol = textInput.value;
    let height = numberInput.valueAsNumber;
    let tree = '';
    for (let i=1; i <= height; i++) {
        tree += '\u00A0'.repeat(height - i) + symbol.repeat(2 * i -1) + '\n';
    }
    treeBox.innerText = tree;
    console.log(tree);
}

form.addEventListener('submit', function (e) {
        e.preventDefault();
        createTree();
        form.reset();
    })