import { Recado } from "./Recado";

export class Reuniao {
  title!: string;
  date!: Date;
  description!: string;
  mural!: Recado[];
  constructor(title: string, description: string) {
    this.title = title;
    this.date = new Date();
    this.description = description;
    this.mural = [];
  }

  addMessage(recado: Recado): void {
    this.mural.push(recado);
  }
}