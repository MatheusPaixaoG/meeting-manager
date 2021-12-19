import { Usuario } from "./usuario";

export class UsuarioService {
  usuarios: Usuario[] = [];
  addUser(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }
}