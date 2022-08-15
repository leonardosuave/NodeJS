var axiosConfig = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}` 
    }
}

function createGame() {
    const titleInput = document.querySelector('#title');
    const yearInput = document.querySelector('#year');
    const produtoraInput = document.querySelector('#produtora');
    const priceInput = document.querySelector('#price')

    const game = {
        title: titleInput.value,
        year: yearInput.value,
        produtora: produtoraInput.value,
        price: priceInput.value
    }

    axios.post('http://localhost:3030/game', game, axiosConfig).then(response => {
        if(response.status == 200) {
            alert('Game cadastrado!')
        }
        location.reload()
    }).catch(erro => {
        console.log(erro)
        alert('[ERRO]. Este titulo ja foi cadastrado!')
        location.reload()
    })
}