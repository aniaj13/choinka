let numberInput = document.getElementById('treeHeight');
let textInput = document.getElementById('treeMaterial');
const form = document.getElementById('settings');
const treeBox = document.getElementById('treeBox');
let pickedColor = document.getElementById('treeColor');

function validateForm() {
    if (textInput.value === '') {
        alert('Musisz wybrać materiał!');
        return false;
    } else {
        return true;
    }
}
function createTree() {
    let symbol = textInput.value;
    let height = numberInput.valueAsNumber;
    let tree = '';

        tree += '\u00A0'.repeat(height - 1) + '*\n';
        for (let i = 1; i <= height; i++) {
            tree += '\u00A0'.repeat(height - i) + symbol.repeat(2 * i - 1) + '\n';
        }
        if (height < 10) {
            tree += '\u00A0'.repeat(height - 1) + '|';
        } else {
            tree += '\u00A0'.repeat(height - 2) + '|_|';
        }
    return tree;
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    treeBox.innerHTML = '';
    if (validateForm() === true) {
        let tree = createTree();
        treeBox.innerText = tree;
        treeBox.style.color = pickedColor.value;
        console.log(tree);
    }
    form.reset();
});