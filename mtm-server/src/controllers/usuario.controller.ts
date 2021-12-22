import { Usuario } from "../models/usuario";

export class UsuarioController {
  usuarios: Usuario[];
  usuariosAtivos: Usuario[];
  usuarioAtivo: Usuario;
  count: number;

  constructor() {
    this.usuarios = [];
    this.usuariosAtivos = [];
    this.count = 0;
  }

  addUser(usuario: Usuario): boolean {
    const newUsuario = new Usuario(this.count, usuario.nome, usuario.email, usuario.senha, usuario.cpf, usuario.reunioes);
    if (this.cpfEEmailNaoCadastrados(usuario.cpf, usuario.email)) {
      this.usuarios.push(newUsuario);
      this.count++;
      return true;
    }
    return false;
  }

  addActiveUser(usuario: Usuario): void {
    const newUsuario = new Usuario(usuario.id, usuario.nome, usuario.email, usuario.senha, usuario.cpf, usuario.reunioes);
    this.usuariosAtivos.push(newUsuario);
  }

  deslogar(id: number, usuarioDepoisDeslogado: Usuario): boolean {
    let usuarioIndex = this.usuariosAtivos.findIndex(u => u.id == id);
    if (usuarioIndex == -1) {
      return false;
    }

    console.log("deslogar");
    this.usuarioAtivo = usuarioDepoisDeslogado;
    this.usuariosAtivos.splice(usuarioIndex, 1);
    return true;
  }

  deleteUser(id: number): boolean {
    let userIndex = this.usuarios.findIndex(u => u.id == id);
    if (userIndex == -1) {
      return false;
    }

    let usuarioDepoisDeslogado = new Usuario(-1, "", "", "", "", []);
    let usuarioDeslogado = this.deslogar(userIndex, usuarioDepoisDeslogado);
    this.usuarios.splice(userIndex, 1);
    return true;
  }

  setActiveUser(id: number): boolean {
    var indexOfActiveUser = this.usuarios.findIndex(u => u.id == id);
    this.usuarioAtivo = this.usuarios[indexOfActiveUser];
    return true;
  }

  cpfEEmailNaoCadastrados(cpf: string, email: string): boolean {
    return !this.usuarios.find(u => u.cpf == cpf) && !this.usuarios.find(us => us.email == email);
  }

  update(id: number, nome: string, senha: string): boolean {
    let usuarioIndex = this.usuarios.findIndex(u => u.id == id);
    if (usuarioIndex == -1) {
      return false;
    }

    this.usuarios[usuarioIndex].nome = nome;
    this.usuarios[usuarioIndex].senha = senha;
    return true;
  }

  getUsers(): Usuario[] {
    return this.usuarios;
  }

  getActiveUsers(): Usuario[] {
    return this.usuariosAtivos;
  }

  getUserById(id: number): Usuario {
    const usuario = this.usuarios.find(u => u.id == id);
    return usuario;
  }

  getActiveUserById(id: number): Usuario {
    const usuarioAtivo = this.usuariosAtivos.find(u => u.id == id);
    return usuarioAtivo;
  }

  getActiveUser(): Usuario {
    console.log("controller");
    return this.usuarioAtivo;
  }
}