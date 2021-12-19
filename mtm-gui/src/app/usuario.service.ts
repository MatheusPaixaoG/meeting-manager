import { Usuario } from "./usuario";
import { Injectable } from "@angular/core";

@Injectable()
export class UsuarioService {
  usuarios: Usuario[] = [];
  addUser(usuario: Usuario): Usuario | null {
    var result = null;
    if (this.cpfEEmailNaoCadastrados(usuario.cpf, usuario.email)) {
      this.usuarios.push(usuario);
      result = usuario;
    }
    return result;
  }

  cpfEEmailNaoCadastrados(cpf: string, email: string): boolean {
    return !this.usuarios.find(u => u.cpf == cpf) && !this.usuarios.find(us => us.email == email);
  }
}