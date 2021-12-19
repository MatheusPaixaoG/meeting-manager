import { Recado } from "./Recado";

export class Mural {
  mural!: Recado[];

  constructor() {
    this.mural = [];
  }

  addMessage(recado: Recado): void {
    this.mural.push(recado);
  }
}