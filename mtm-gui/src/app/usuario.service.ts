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

  deslogar(): Observable<any> {
    let newUsuarioAtivo = new Usuario();
    return this.http.post<any>('http://localhost:3000/usuarios/usuarioAtivo', newUsuarioAtivo);
    // this.usuarioAtivo = new Usuario();
  }

  setActiveUser(usuario: Usuario): Observable<any> {
    // var indexOfActiveUser = this.usuarios.findIndex(u => u.cpf == usuario.cpf);
    // this.usuarioAtivo = this.usuarios[indexOfActiveUser];
    return this.http.post<any>('http://localhost:3000/usuarios/' + usuario.id + "/setActive", usuario);
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

  getUsers(): Observable<Usuario[]> {
    // var result: Usuario[] = [];
    // for (let u of this.usuarios) {
    //   result.push(u.clone());
    // }
    // return result;

    return this.http.get<Usuario[]>('http://localhost:3000/usuarios');
  }

  getActiveUserById(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:3000/usuarios/' + id);
    // let usuarioAtivo = this.usuariosAtivos.find(u => u.id == id);
    // return usuarioAtivo;
  }

  getActiveUsers(): Usuario[] {
    var result: Usuario[] = [];
    for (let u of this.usuariosAtivos) {
      result.push(u.clone());
    }
    return result;
  }

  // getActiveUser(): Usuario {
  //   return this.usuarioAtivo;
  // }

  getActiveUser(): Observable<Usuario> {
    return this.http.get<Usuario>('http://localhost:3000/usuarios/usuarioAtivo');
    // return this.usuarioAtivo;
  }
}