const Reader = require('./Reader')
const Processor = require('./Processor');
const Table = require('./Table')
const HtmlParsers = require('./HtmlParser')
const Writer= require('./Writer')
const PDFWriter = require('./pdfWriter')

const leitor = new Reader();
const escritor = new Writer()

async function main() {

    //Recebe os dados do leitor
    const dados = await leitor.Read('./users.csv')

    //Transoforma os dados do excel em arrays, através da quebra de suas linhas e adicionando cada linha em um array
    const dadosProcessados = Processor.Process(dados)

    //Passa os dados do array obtido para um objeto de tabela
    const usuarios = new Table(dadosProcessados)
    
    //Para passar os dados da tabela em string html
    const html = await HtmlParsers.Parse(usuarios)

    //Para escrever um arquivo em formato HTML
    escritor.Write(Date.now() + ".html", html)

    //Para criar um arquivo PDF
    PDFWriter.WritePDF(Date.now() + '.pdf', html)
}

main()