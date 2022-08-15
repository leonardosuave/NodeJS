function login() {
    const emailInput = document.querySelector('#email')
    const passwordInput = document.querySelector('#password')

    const email = emailInput.value
    const password = passwordInput.value

    axios.post('http://localhost:3030/auth', {
        email,
        password
    }).then(response => {
       if(response.status == 200) {
        //console.log(response.data.token) -> Vai mostrar o token referente ao login realizado.
        const token = response.data.token //Captura o token dinâmicamente para ser utilizado em outros endPoint
        
        localStorage.setItem('token', token) //Para criar no localStorage uma chave com nome token que irá armazenar o token de autenticação.
        
        alert('Login com sucesso.')
       } 
    }).catch(erro => {
        console.log(erro)
        alert('[ERRO]. Checar email e senha.')
        location.reload()
    })
}