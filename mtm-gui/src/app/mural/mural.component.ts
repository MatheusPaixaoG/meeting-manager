import { Component, OnInit } from '@angular/core';
import { MuralService } from '../mural.service';
import { Recado } from '../Recado';
import { ReuniaoService } from '../reuniao.service';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css']
})
export class MuralComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private reuniaoService: ReuniaoService, private muralService: MuralService) { }
  mural: Recado[] = [];
  recado: Recado = new Recado();
  usuarioAtivo = new Usuario();
  recadoSemConteudo: boolean = false;

  addMessage(r: Recado): void {
    this.usuarioAtivo = this.usuarioService.getActiveUser();
    r.author = this.getActiverUserName();
    if (this.muralService.addMessage(r, this.reuniaoService.getActiveMeeting())) {  // Se nada tiver sido escrito no campo da mensagem, pede para escrever algo
      this.mural.push(r);
      this.recado = new Recado();
    } else {
      this.recadoSemConteudo = true;
    }
  }

  getActiverUserName(): string {
    return this.usuarioService.getActiveUser().nome;
  }

  descricaoValida(content: string): boolean {
    var regex = "^\\s*$";
    return !content.match(regex);
  }

  onMove(): void {
    this.recadoSemConteudo = false;
  }

  ngOnInit(): void {
    this.mural = this.muralService.getMessages(this.reuniaoService.getActiveMeeting());
  }

}
