export default class Cl_vParticipante {
    constructor() {
      this.vista = document.getElementById("participanteForm");
      this.inCedula = document.getElementById("participanteForm_inCedula");
      this.inTipo = document.getElementById("participanteForm_inTipo");
      this.inEdad = document.getElementById("participanteForm_inEdad");
      this.btAceptar = document.getElementById("participanteForm_btAceptar");
    }  
    get cedula() {
      return +this.inCedula.value;
    }
    get tipo() {
      return +this.inTipo.value;
    }
    get edad() {
      return +this.inEdad.value;
    }
  

    mostrar() {
      this.vista.hidden = false;
    }
    ocultar() {
      this.vista.hidden = true;
    }
  }
  