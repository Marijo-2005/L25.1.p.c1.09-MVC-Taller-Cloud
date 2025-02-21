export default class Cl_Controlador {
  
    constructor(modelo, vista) {
      this.modelo = modelo;
      this.vista = vista;
    }
    
    agregarParticipante() {
      this.modelo.procesarParticipante(this.vista.agregarParticipante());
      this.vista.reportarParticipante(
        this.modelo.masParticipo(),
        this.modelo.total(),
        this.modelo.impuesto()
      );
    }
  }