import { Recado } from "./Recado";
import { Usuario } from "./usuario";

export class Reuniao {
  id: number;
  title!: string;
  data_inicio!: Date;
  data_fim!: Date;
  date!: Date;
  description!: string;
  participantes!: number[];
  mural: Recado[] = [];
  numbers: number[];

  constructor(id: number, title: string, description: string, participantes: number[], mural: Recado[]) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.participantes = participantes;
    this.mural = mural;
    this.numbers = Array(5).fill(0).map((x, i) => i);
  }
}