export default class Cl_Taller {
    constructor() {
        this.cntEstudiante = 0;
        this.cntProfesor = 0;
        this.cntInvitados = 0;
        this.acMonto = 0;

         }

        procesarParticipante (participante) {
            
            this.acMonto+= participante.montoP();
            
            if (participante.tipo ==1){
                this.cntEstudiante++
            }
            if (participante.tipo ==2){
                this.cntProfesor
            }
            if (participante.tipo ==3){
                this.cntInvitados++
            }

            
            
        }

        masParticipo(){
          
                if ((this.cntEstudiante == this.cntProfesor) && 
                (this.cntProfesor == this.cntInvitados)) {
                    return "todos"
                }
                else if ((this.cntEstudiante == this.cntProfesor) &&
                 (this.cntEstudiante > this.cntInvitados)) {
                    return " Estudiantes y Profesores "
                }
        
                else if ((this.cntEstudiante == this.cntInvitados) &&
                 (this.cntEstudiante > this.cntProfesor)) {
                    return "Estudiates y imvitados"
                }
        
                else if ((this.cntProfesor== this.cntInvitados) &&
                 (this.cntProfesor > this.cntEstudiante)) {
                    return "Profesores y Invitados"
                }
        
                else if ((this.cntEstudiante > this.cntProfesor) && 
                (this.cntProfesor == this.cntInvitados)) {
                    return "Estudiante"
                }
        
                else if ((this.cntProfesor > this.cntEstudiante) &&
                (this.cntEstudiante == this.cntInvitados)) {
                    return "Profesor "
                }
        
                else
                    return "Invitado"
            }
        
        total(){
            return this.acMonto;
        }

        impuesto() {
            return this.acMonto * 0.30;
        }
}
