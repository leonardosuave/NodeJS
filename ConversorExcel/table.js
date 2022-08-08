class Table {

    constructor(dadosProcessados) {
        this.header = dadosProcessados[0],
        dadosProcessados.shift() // -> Para remover a primeira linha e atribuir o resto para o atributo abaixo.

        this.rows = dadosProcessados
    }

    get ColumCount() {
        return this.header.length;
    }

    get RowCount() {
        return this.rows.length;
    } 
}

module.exports = Table