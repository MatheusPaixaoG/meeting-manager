export class Recado {
  author: string;//Mural sendo um array de Postagens e sendo um atributo da classe reunião
  content: string;

  constructor(author: string, content: string) {
    this.author = author;
    this.content = content;
  }

  // clean(): void {
  //   this.author = "";
  //   this.content = "";
  // }

  // clone(): Recado {
  //   var recado: Recado = new Recado();
  //   recado.author = this.author;
  //   recado.content = this.content;
  //   return recado;
  // }
}