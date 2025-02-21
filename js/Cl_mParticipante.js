export default class Cl_mParticpante{
    constructor({cedula,tipo,edad}) {
        this._cedula = cedula;
        this._tipo = tipo;
        this.edad = edad;
    }

    set cedula (c) {
        this._cedula = c;
    }

    get cedula (){
        return this._cedula;
    }

    set tipo ( t) {
        this._tipo = t;
    }

    get tipo (){
        return this._tipo;
    }

    set edad (e) {
        this._edad = e
    }

    get edad () {
        return this._edad;
    }

    montoP (){

        if (this._tipo === 1){
            return 10;
        }
        if (this._tipo === 2){
            return 15;
        }
        if (this._tipo === 3){
            return 20;
}
    }
}