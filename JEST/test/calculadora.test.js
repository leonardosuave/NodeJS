//Uso de JEST puro, sem express()

const app = require('../src/app')

//describe é apenas para agrupar a suite de teste em categorias (Não é necessário para funcionamento) -> Operações básicas é a categoria
describe('Operações básicas', () => {

    test('Deve retornar o valor 10 ao somar 5 + 5', () => {
        const result = app.soma(5,5);   //Teste de soma
        expect(result).toEqual(10);     //Condição de sucesso
    
    })
    
    it('should return 10 when multiply 2 to 5', () => {
        const result = app.multiply(2,5);
        expect(result).toEqual(10);
    })

})

//Caso queira pode criar um novo describe de categoria e anexar suites de operações mais complexas, como potência, raiz....