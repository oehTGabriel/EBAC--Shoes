//Abrir menu

const carrinho = document.getElementById('carrinho');
const botaoCarrinho = document.getElementById('botao-carrinho');
const botaoFecharCarrinho = document.getElementById('botao-fechar-carrinho');

botaoCarrinho.addEventListener('click', () => {
    carrinho.classList.add('active');
})

botaoFecharCarrinho.addEventListener('click', () => {
    carrinho.classList.remove('active');
})

//adicionar carrinho

const botaoProduto = document.querySelectorAll('.produto button');
const lista = document.querySelector('.compras ul');

botaoProduto.forEach((botao) => {
    botao.addEventListener("click", function () {
        const produto = this.parentElement;

        const preco = produto.querySelector('p').textContent;
        const imagem = produto.querySelector('img').src;

        const compraNoCarrinho = document.createElement('li');
            compraNoCarrinho.innerHTML = ` <li>
                    <img src="${imagem}" alt="">
                    <p>${preco}</p>
                </li>`;

        lista.appendChild(compraNoCarrinho);
    })
})