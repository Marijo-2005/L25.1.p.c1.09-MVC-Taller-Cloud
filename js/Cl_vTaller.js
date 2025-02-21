import Cl_vParticipante from "./Cl_vParticipante.js";
import Cl_mParticipante from "./Cl_mParticipante.js";
export default class Cl_vTaller {
  constructor() {
    this.controlador = null;
    this.mParticipante = null;
    this.vParticipante = new Cl_vParticipante();
    this.vista = document.getElementById("mainForm");
    this.tabla = document.getElementById("mainForm_tabla");
    this.btAgregar = document.getElementById("mainForm_btAgregar");
    this.lblMasParticipo = document.getElementById("mainForm_lblMasParticipo");
    this.lblTotal = document.getElementById("mainForm_lblTotal" );
    this.lblImpuesto = document.getElementById("mainForm_lblImpuesto");
    this.btAgregar.onclick = () => this.ocultar();
    this.vParticipante.btAceptar.onclick = () => this.controlador.agregarParticipante();
    this.mostrar();
  }

  agregarParticipante() {
    this.mParticipante = new Cl_mParticipante({
      cedula: this.vParticipante.cedula,
      tipo: this.vParticipante.tipo,
      edad: this.vParticipante.edad,
     });
    this.mostrar();
    return this.mParticipante;
  }
  mostrar() {
    this.vista.hidden = false;
    this.vParticipante.ocultar();
  }
  ocultar() {
    this.vista.hidden = true;
    this.vParticipante.mostrar();
  }
  reportarParticipante(masParticipo, total, impuesto) {
    this.tabla.innerHTML += `
    <tr>
      <td>${this.mParticipante.cedula}</td>
      <td>${this.mParticipante.tipo}</td>
      <td>${this.mParticipante.edad}</td>
      <td>${this.mParticipante.montoP()}</td>
    </tr>`;
    this.lblMasParticipo.innerHTML = masParticipo;
    this.lblTotal.innerHTML = total;
    this.lblImpuesto.innerHTML = impuesto;
  }
}
