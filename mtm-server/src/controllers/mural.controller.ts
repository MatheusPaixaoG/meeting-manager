import { Recado } from "../models/Recado";
import { Reuniao } from "../models/reuniao";

export class MuralController {
  reuniao: Reuniao;
  reuniaoAtiva: Reuniao;

  constructor() {
    //this.reuniao = new Reuniao();
  }

  addMessage(recado: Recado, reuniaoAtiva: Reuniao): boolean {
    if (this.descricaoValida(recado.content)) {
      const newMessage = new Recado(recado.author, recado.content);
      reuniaoAtiva.mural.push(newMessage);
      return true;
    }
    return false;
  }

  // addMessage(recado: Recado, reuniaoAtiva: Reuniao): Recado | null {
  //   recado = recado.clone();
  //   var result = null;
  //   if (this.descricaoValida(recado.content)) {
  //     reuniaoAtiva.mural.push(recado);
  //     this.reuniao.mural.push(recado);
  //     result = recado;
  //   }
  //   return result;
  // }

  getMessages(reuniaoAtiva: Reuniao): Recado[] {
    return reuniaoAtiva.mural;
  }

  descricaoValida(content: string): boolean {
    var regex = "^\\s*$";
    return !content.match(regex);
  }
}