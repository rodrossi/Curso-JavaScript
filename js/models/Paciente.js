class Paciente {
    constructor(nome, peso, altura, gordura) {
        this._nome = nome;
        this._peso = peso;
        this._altura = altura;
        this._gordura = gordura;
    }

    get nome() {
        return this._nome
    }

    get peso() {
        return this._peso
    }

    get altura() {
        return this._altura
    }

    get gordura() {
        return this._gordura
    }

    get imc() {
        let imc = this._peso / Math.pow(this._altura, 2);
        return imc.toFixed(2);
    }

    validaPeso(valor) {
        return (valor > 0 && valor <= 600) ? true : false;
    }
      
    validaAltura(valor) {
        return (valor > 0 && valor <= 3) ? true : false;
    }

    calculaImc(peso, altura) {
        return peso / (altura * altura);
    }
}

export default Paciente