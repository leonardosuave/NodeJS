const GameModel = require('../../database/games')

class Game {
    constructor(body) {
        this.title = body.title,
        this.year = parseInt(body.year),
        this.produtora = body.produtora,
        this.price = parseInt(body.price)
        this.errors = []
    }

    async createNewGame() {
        this.valid();
        if(this.errors.length > 0) return;

        await this.gameExist()
        if(this.errors.length > 0) return;

        const year = parseInt(this.year)
        const price = parseInt(this.price)

        await GameModel.create({
            title: this.title,
            year: year,
            produtora: this.produtora,
            price: price
        })
    };

    valid() {
        if(!this.title) return this.errors.push('Titulo de artigo inválido.')
        if(isNaN(this.year)) return this.errors.push('Titulo de ano inválido.')
        if(!this.produtora) return this.errors.push('Titulo de produtora inválido.')
        if(isNaN(this.price)) return this.errors.push('Titulo de preço inválido.')
    };

    async gameExist() {
        const gameExist = await GameModel.findOne({
            where: {title: this.title}
        })

        if(gameExist) return this.errors.push('Esse game ja foi listado.')
        return;
    };

    static async delete(id) {
        if(isNaN(id)) return;

        const findGame = GameModel.destroy({
            where: {
                id: id
            }
        })
        return findGame
    }

    static async update(body, id) {
        const GameToUpdate = await GameModel.findByPk(id)

        if(GameToUpdate) {
            let { title, year, produtora, price } = body

            if(title != undefined) {

                const checkTitle = await GameModel.findOne({
                    where: {title: title}
                })

                if(!checkTitle) {
                    await GameModel.update({title: title}, {
                        where: {
                            id: id
                        }
                    })
                } else {
                    return false
                }

            }
            if(year != undefined) {
                await GameModel.update({year: year}, {
                    where: {
                        id: id
                    }
                })
            }
            if(produtora != undefined) {
                await GameModel.update({produtora: produtora}, {
                    where: {
                        id: id
                    }
                })
            }
            if(price != undefined) {
                await GameModel.update({price: price}, {
                    where: {
                        id: id
                    }
                })
            }

            return true
        }

        return false

    }
}
module.exports = Game