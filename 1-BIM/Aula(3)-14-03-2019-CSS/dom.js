//Document Object Model

function troca() {
    let li = document.body.children[2].children[1];
    //O segundo filho do terceiro filho do body
    li.textContent = 'Geografia';
    li.style.color = 'lime';
    li.parentElement.style.backgroundColor = 'black';
    //DOM TRAVESSING (navegação do DOM)
}

const button = document.body.children[5];
button.onclick = troca;