const app = require('../src/app2')
const supertest = require('supertest') 

//Permite fazer requisições na aplicação
const request = supertest(app)  // -> app é referênte a rota de teste

test('A aplicação deve responder na porta 3131', async () => {

    //Test com promisse sempre deve ter return
    return request.get('/').then(res => expect(res.statusCode).toEqual(200))

    /*Por Async/Await suja muito o código porque pode ter situaçoes com varios try/catch dentro de outro try/catch

    try{
        let res = await request.get('/')
        expect(res.statusCode).toEqual(200)
    }catch(err) {
        console.log(err)
    }
    */
})

test('Deve responder azul como cor favorita de Leonardo', () => {
    return request.get('/cor/leonardo').then(res => {
        //Multiplos expects
        expect(res.statusCode).toEqual(200)
        expect(res.body.color).toEqual('blue')
        expect(res.body.cor).toEqual('azul')
    })
})