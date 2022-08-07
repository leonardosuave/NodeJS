class Tv {
    constructor(nome, tamanho) {
        this.nome=nome,
        this.tamanho=tamanho,
        this.opcControle = new Controle(),
        this.ligar = new Ligar()

    }
}

class Controle {
    
    ProximoCanal() {
        console.log('Passando para o proximo canal...')
    }

    VoltarCanal() {
        console.log('Voltando Canal...')
    }

    AumentarVolume() {
        console.log('Aumentando volume...')
    }

    DiminuirVolume() {
        console.log('Diminuindo canal...')
    }
}

class Ligar {

    LigarTv() {
        console.log('Ligando a Tv...')
    }

    DesligarTv() {
        console.log('Desligando a Tv...')
    }
}

const television = new Tv('samsung','65 polegadas')
television.tamanho