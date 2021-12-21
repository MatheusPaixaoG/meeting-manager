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

  // clean(): void {
  //   this.nome = "";
  //   this.email = "";
  //   this.senha = "";
  //   this.cpf = "";
  //   this.reunioes = [];
  // }

  // clone(): Usuario {
  //   var usuario: Usuario = new Usuario();
  //   usuario.nome = this.nome;
  //   usuario.email = this.email;
  //   usuario.senha = this.senha;
  //   usuario.cpf = this.cpf;
  //   usuario.reunioes = this.cloneReunioes();
  //   return usuario;
  // }

  // cloneReunioes(): Reuniao[] {
  //   var reunioes: Reuniao[] = [];
  //   for (var i = 0; i < this.reunioes.length; i++) {
  //     reunioes.push(this.reunioes[i]);
  //   }
  //   return reunioes;
  // }
}