import { Recado } from "./Recado";
import { Reuniao } from "./reuniao";
import { Injectable } from "@angular/core";

@Injectable()
export class MuralService {
  reuniao: Reuniao = new Reuniao();
  addMessage(recado: Recado): void {
    this.reuniao.mural.push(recado);
  }
}