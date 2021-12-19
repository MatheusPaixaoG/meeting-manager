import { Recado } from "./Recado";
import { Reuniao } from "./reuniao";
export class MuralService {
  reuniao: Reuniao = new Reuniao();
  addMessage(recado: Recado): void {
    this.reuniao.mural.push(recado);
  }
}