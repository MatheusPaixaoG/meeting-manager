import { Usuario } from "./usuario";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class UsuarioService {
  usuarios: Usuario[] = [];
  usuariosAtivos: Usuario[] = [];
  usuarioAtivo = new Usuario();

  constructor(private http: HttpClient) { }

  addUser(usuario: Usuario): Observable<any> {
    // usuario = usuario.clone();
    // var result = null;
    // if (this.cpfEEmailNaoCadastrados(usuario.cpf, usuario.email)) {
    //   this.usuarios.push(usuario);
    //   console.log(this.usuarios);
    //   result = usuario;
    // }
    // return result;

    return this.http.post<any>('http://localhost:3000/usuarios', usuario);
  }

  addActiveUser(usuario: Usuario): Observable<any> {
    // usuario = usuario.clone();
    // this.usuariosAtivos.push(usuario);
    return this.http.post<any>('http://localhost:3000/usuarios/' + usuario.id, usuario);
  }

  deslogar(): void {
    this.usuarioAtivo = new Usuario();
  }

  setActiveUser(usuario: Usuario): void {
    var indexOfActiveUser = this.usuarios.findIndex(u => u.cpf == usuario.cpf);
    this.usuarioAtivo = this.usuarios[indexOfActiveUser];
  }

  cpfEEmailNaoCadastrados(cpf: string, email: string): boolean {
    return !this.usuarios.find(u => u.cpf == cpf) && !this.usuarios.find(us => us.email == email);
  }

  update(usuario: Usuario): void {
    usuario = usuario.clone();
    for (let u of this.usuarios) {
      if (u.cpf == usuario.cpf) {
        u.reunioes = usuario.reunioes;
      }
    }
  }

  getUsers(): Usuario[] {
    var result: Usuario[] = [];
    for (let u of this.usuarios) {
      result.push(u.clone());
    }
    return result;
  }

  getActiveUsers(): Usuario[] {
    var result: Usuario[] = [];
    for (let u of this.usuariosAtivos) {
      result.push(u.clone());
    }
    return result;
  }

  getActiveUser(): Usuario {
    return this.usuarioAtivo;
  }
}