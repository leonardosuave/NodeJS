const ejs = require('ejs')

class HtmlParsers {

    static async Parse(table) {
        return await ejs.renderFile('./table.ejs', {header : table.header, rows: table.rows}) //Vai renderizar o arquivo.ejs
    }
}

module.exports = HtmlParsers