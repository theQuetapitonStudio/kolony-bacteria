/*
Mutações
cawbe: Faz o metabolismo ficar acelerado
woker: Faz ter menos fome e mais energia
*/

class Bacteria {
    constructor(dna) {
        /*
        coisas no dna:
        metabolismo
        mutacao
        geracao
        */
        this.dna = dna

        this.energia = 50
        this.fome = 20
        this.idade = 0
        this.viva = true
    }
    reproduzir() {
        let mutacao
        if ((Math.random() * 0.05) >= 0.01) {
            mutacao = "cawbe"
        } else if ((Math.random() * 0.5) <= 0.1) {
            mutacao = "woker"
        } else {
            mutacao = null
        }
        let novabac = new Bacteria({
            geracao: this.dna.geracao + 0.05,
            metabolismo: this.dna.metabolismo-0.05,
            mutacao: mutacao
        })

        return novabac
    }
    comer(be) {
        if (!this.viva) return {rp: 5}
        // be é uma Bacteria
        if (be.fome >=65) {
            // Bacteria original será comida
            this.viva = false
        }

        if (be.fome <= 30 && be.fome <= 50) {
            // se reproduz rapidamente

            this.viva = false
            // e morreu skksskkskskkskskskskksksksksksksksksksk
            return {rp: true, bebe: this.reproduzir()}
        }
        if (this.fome <= 1.5) {
            this.energia -= 0.005
            // você comeu na hora errada e ficou sem energia
            return {fp: false}
        }
        if (be.fome <= 50) {
            be.vida = false
            if (this.dna.mutacao === "woker") {
                this.fome -= 0.5
                this.energia += 0.05
                return {rp: false}
            }
            if (this.dna.mutacao === "cawbe") {
                metabolismo -= 0.0005
                // quando mais comer, ficar cansado
                return {rp: false}
            }
        }

        return {rp: false}
    }
}
