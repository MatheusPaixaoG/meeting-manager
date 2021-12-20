import { Recado } from "./Recado";
import { Reuniao } from "./reuniao";
import { Injectable } from "@angular/core";

@Injectable()
export class MuralService {
  reuniao: Reuniao = new Reuniao();

  addMessage(recado: Recado, reuniaoAtiva: Reuniao): Recado | null {
    recado = recado.clone();
    var result = null;
    if (this.descricaoValida(recado.content)) {
      reuniaoAtiva.mural.push(recado);
      this.reuniao.mural.push(recado);
      result = recado;
    }
    return result;
  }

  getMessages(reuniaoAtiva: Reuniao): Recado[] {
    var result: Recado[] = [];
    for (let m of reuniaoAtiva.mural) {
      result.push(m);
    }
    return result;
  }

  descricaoValida(content: string): boolean {
    var regex = "^\\s*$";
    return !content.match(regex);
  }
}