var axiosConfig = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}` 
    }
}

axios.get('http://localhost:3030/games', axiosConfig).then(response => {
    //console.log(response) -> Objeto com varios itens e o array com os jogos está dentro de data
    const games = response.data
    const list = document.getElementById('games'); //Captura o elemento <ul>

    games.forEach(game => {
        const item = document.createElement('li') 

        //atributos customizados para atualizar como parâmetros de edição e delete.
        item.setAttribute("data-id", game.id);
        item.setAttribute("data-title", game.title);
        item.setAttribute("data-year", game.year);
        item.setAttribute("data-produtora", game.produtora);
        item.setAttribute("data-price", game.price);

        item.innerHTML = `${game.title} - R$${game.price}`

        //Criar botão de delete
        const deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = 'Deletar'
        deleteBtn.addEventListener('click', function() {
            deleteGame(item)
        });

        //Criar botão de editar
        const editBtn = document.createElement('button')
        editBtn.innerHTML = 'Editar'
        editBtn.addEventListener('click', function() {
            loadGame(item)
        })


        //Botões filhos do campo correspondente ao item do game
        item.appendChild(editBtn)
        item.appendChild(deleteBtn)
        list.appendChild(item)
    })

}).catch(error => {
    console.log(error)
})

function deleteGame(listItem) {
    const id = listItem.getAttribute('data-id') //Para capturar o valor do atributo para enviar como req.params.id do endPoint
    axios.delete(`http://localhost:3030/game/${id}`, axiosConfig).then(response => {
        if(response.status == 200) {
            alert('Game deletado!')
        }
        location.reload()
    }). catch(erro =>{
        console.log(erro)
    })
}

function loadGame(listItem) {
    console.log(listItem)

    //Para capturar o valor dos atributos customizados
    const id = listItem.getAttribute('data-id');
    const title = listItem.getAttribute('data-title');
    const year = listItem.getAttribute('data-year');
    const produtora = listItem.getAttribute('data-produtora');
    const price = listItem.getAttribute('data-price');

    //Para enviar o valor do atributo ao campo do html de edição
    document.querySelector('#idEdit').value = id;
    document.querySelector('#titleEdit').value = title;
    document.querySelector('#yearEdit').value = year;
    document.querySelector('#produtoraEdit').value = produtora;
    document.querySelector('#priceEdit').value = price;
};

//Para enviar os campos editados para o backend
function updateGame() {
    const idInput = document.querySelector('#idEdit')
    const titleInput = document.querySelector('#titleEdit');
    const yearInput = document.querySelector('#yearEdit');
    const produtoraInput = document.querySelector('#produtoraEdit');
    const priceInput = document.querySelector('#priceEdit')

    const id = idInput.value //O id ja esta no campo, então basta converter em valor e utiliza-lo

    const game = {
        title: titleInput.value,
        year: yearInput.value,
        produtora: produtoraInput.value,
        price: priceInput.value
    }

    axios.put(`http://localhost:3030/game/${id}`, game, axiosConfig).then(response => {
        if(response.status == 200) {
            alert('Game atualizado!')
        }
        location.reload()
    }).catch(erro => {
        console.log(erro)
        alert('[ERRO]. Este titulo ja foi cadastrado!')
        location.reload()
    })
}