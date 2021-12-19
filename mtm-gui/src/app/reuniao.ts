import { Recado } from "./Recado";

export class Reuniao {
  title!: string;
  date!: Date;
  description!: string;
  mural: Recado[] = [];
}