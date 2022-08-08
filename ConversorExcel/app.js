const Reader = require('./Reader')
const Processor = require('./Processor');
const Table = require('./Table')

const leitor = new Reader();

async function main() {

    //Recebe os dados do leitor
    const dados = await leitor.Read('./users.csv')

    //Transoforma os dados do excel em arrays, através da quebra de suas linhas e adicionando cada linha em um array
    const dadosProcessados = Processor.Process(dados)

    //Passa os dados do array obtido para um objeto de tabela
    const usuarios = new Table(dadosProcessados)
    console.log(usuarios.RowCount)

}

main()