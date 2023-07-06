var valorTotal = [0,0]
var valorProduto = [50.00,30.00]
var qtd = [0,0]

function adicionarItem(item){
    let quantidade = document.getElementById("quantidade"+item)
    let total = document.getElementById("total"+item)
    qtd[item] += 1
    valorTotal[item] = Number.parseFloat(valorProduto[item] * qtd[item])
    quantidade.innerText = qtd[item]
    total.innerText = valorTotal[item].toFixed(2)
    valorCompra()
}

function removerItem(item){
    if (qtd[item] > 0)
    qtd[item] -= 1
    let quantidade = document.getElementById("quantidade"+item)
    let total = document.getElementById("total"+item)
    valorTotal[item] = Number.parseFloat(valorProduto[item] * qtd[item])
    quantidade.innerText = qtd[item]
    total.innerText = valorTotal[item].toFixed(2)
    valorCompra()
}

function valorCompra(){
    let valorTotalCompra = document.getElementById("valorTotalCompra")
    let total = 0
    valorTotal.forEach(item => {
        total += Number.parseFloat(item)
    })
    valorTotalCompra.innerText = total.toFixed(2)
}