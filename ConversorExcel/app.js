const Reader = require('./Reader')
const Processor = require('./Processor');


const leitor = new Reader();

async function main() {
    const dados = await leitor.Read('./users.csv')

    const dadosProcessados = Processor.Process(dados)
    console.log(dadosProcessados)
}

main()