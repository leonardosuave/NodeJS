const fs = require('fs')
const util = require('util')

class Writer {

    constructor() {
        this.writer = util.promisify(fs.writeFile) //Para transformar a função em promise
    }

    async Write(filename, data) {
        try{
            return await this.writer(filename, data)
        } catch(e) {
            console.log(e)
            return undefined
        }
        
    }

}

module.exports = Writer