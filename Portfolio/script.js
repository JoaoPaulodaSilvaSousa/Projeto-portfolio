function celular() {
    if (window.innerWidth >= 767) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

function clickmenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}