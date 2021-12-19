import { Usuario } from "./usuario";

export class UsuarioService {
  usuarios: Usuario[] = [];
  addUser(usuario: Usuario): Usuario | null {
    var result = null;
    if (!this.usuarios.find(u => u.cpf == usuario.cpf) && !this.usuarios.find(us => us.email == usuario.email)) {
      this.usuarios.push(usuario);
      result = usuario;
    }
    return result;
  }
}