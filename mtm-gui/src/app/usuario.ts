import { Reuniao } from "./reuniao";

export class Usuario {
  nome!: string;
  email!: string;
  senha!: string;
  cpf!: string;
  reunioes: Reuniao[] = [];
}