import { Reuniao } from "./reuniao";
import { Usuario } from "./usuario";
import { Injectable } from "@angular/core";
import { UsuarioService } from "./usuario.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ReuniaoService {
  reunioes: Reuniao[] = [];
  reunioesAtivas: Reuniao[] = [];
  reuniaoAtiva = new Reuniao();

  constructor(private http: HttpClient) { }

  addMeeting(reuniao: Reuniao, data_inicio: Date, data_fim: Date, usuarioAtivo: Usuario): Observable<any> {
    reuniao.data_inicio = data_inicio;
    reuniao.data_fim = data_fim;
    this.reunioes.push(reuniao);
    usuarioAtivo.reunioes.push(reuniao);
    return this.http.post<any>('http://localhost:3000/usuarios/' + usuarioAtivo.id + '/reunioes', reuniao);
    // reuniao = reuniao.clone();
    // var result = null;
    // if (this.tituloNaoUsado(reuniao.title, usuarioAtivo) && this.descricaoValida(reuniao.title)) {
    //   reuniao.data_inicio = data_inicio;
    //   reuniao.data_fim = data_fim;
    //   this.reunioes.push(reuniao);
    //   console.log(this.reunioes);
    //   usuarioAtivo.reunioes.push(reuniao);
    //   console.log(usuarioAtivo.nome);
    //   console.log(usuarioAtivo.reunioes);
    //   result = reuniao;
    // }
    // return result;
  }

  tituloNaoUsado(title: string, usuarioAtivo: Usuario): boolean {
    return !usuarioAtivo.reunioes.find(r => r.title == title);
  }

  getMeetings(usuarioAtivo: Usuario): Reuniao[] {
    var result: Reuniao[] = [];
    for (let r of usuarioAtivo.reunioes) {
      result.push(r);
    }
    return result;
  }

  addActiveMeeting(reuniao: Reuniao): void {
    // reuniao = reuniao.clone();
    this.reunioesAtivas.push(reuniao);
  }

  setActiveMeeting(reuniao: Reuniao): void {
    var indexOfActiveMeeting = this.reunioes.findIndex(r => r.title == reuniao.title);
    this.reuniaoAtiva = this.reunioes[indexOfActiveMeeting];
    console.log(this.reuniaoAtiva);
  }

  getActiveMeeting(): Reuniao {
    return this.reuniaoAtiva;
  }

  descricaoValida(content: string): boolean {
    var regex = "^\\s*$";
    return !content.match(regex);
  }
}