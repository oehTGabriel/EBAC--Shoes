const carrinho = document.getElementById('carrinho');
const botaoCarrinho = document.getElementById('botao-carrinho');
const botaoFecharCarrinho = document.getElementById('botao-fechar-carrinho');

botaoCarrinho.addEventListener('click', () => {
    carrinho.classList.add('active');
})

botaoFecharCarrinho.addEventListener('click', () => {
    carrinho.classList.remove('active');
})