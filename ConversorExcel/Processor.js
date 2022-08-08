class Processor {

    static Process (data){

        //Quebra as linha do texto e transforma em array
        const rows = data.split('\r\n')
        console.log(rows)
        let array = [];

        //Transforma o array em um array de arrays
        rows.forEach(row => {
            let arr = row.split(',')
            array.push(arr)
        })
        
        return array
    }
}

module.exports = Processor;