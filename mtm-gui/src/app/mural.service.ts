import { Mural } from "./mural";
import { Recado } from "./Recado";

export class MuralService {
  mural: Mural = new Mural();
  addMessage(recado: Recado): void {
    this.mural.mural.push(recado);
  }
}