import { Reuniao } from "./reuniao";

export class Usuario {
  id: number;
  nome!: string;
  email!: string;
  senha!: string;
  cpf!: string;
  reunioes!: Reuniao[];

  constructor(id: number, nome: string, email: string, senha: string, cpf: string, reunioes: Reuniao[]) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.cpf = cpf;
    this.reunioes = reunioes;
  }
}