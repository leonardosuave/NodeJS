class Dado {
    constructor(faces) {
        this.face = faces
    }

    Rolar() {
        console.log(`O número do dado é: ${this.GetRandomIntInclusive(1, this.face)}`)
    }

    GetRandomIntInclusive(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max-min+1)) + min;
        
    }
}
const dado6faces = new Dado(6)
dado6faces.Rolar()