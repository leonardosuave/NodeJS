const fs = require('fs')
const util = require('util')

class Reader {
    constructor() {
        this.reader = util.promisify(fs.readFile)
    }

    //Método que retorna o dado e não mais apenas lê o arquivo(devido ao uso de promisify)
    async Read(filepath) {

        try {
            return await this.reader(filepath, {encoding: 'utf-8'});

        } catch(e) {
            console.log(e)
            return undefined;
        }
    }
}

module.exports = Reader