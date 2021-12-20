import { Component, OnInit } from '@angular/core';
import { Reuniao } from '../reuniao';
import { ReuniaoService } from '../reuniao.service';
import { LoginComponent } from '../login/login.component';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-lista-reunioes',
  templateUrl: './lista-reunioes.component.html',
  styleUrls: ['./lista-reunioes.component.css']
})
export class ListaReunioesComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private reuniaoService: ReuniaoService) { }
  usuarioAtivo = new Usuario();
  reuniaoAtiva = new Reuniao();
  date!: Date;
  reunioes: Reuniao[] = [];
  reuniao: Reuniao = new Reuniao();
  tituloReuniaoDuplicado: boolean = false;

  addMeeting(rn: Reuniao): void {
    this.usuarioAtivo = this.usuarioService.getActiveUser();
    this.date = new Date();
    rn.participantes.push(this.usuarioAtivo.email);
    if (this.reuniaoService.addMeeting(rn, this.date, this.usuarioService.getActiveUser())) {
      this.reunioes.push(rn);
      this.reuniao = new Reuniao();
    } else {
      this.tituloReuniaoDuplicado = true;
    }
  }

  addActiveMeeting(r: Reuniao): void {
    this.reuniaoService.addActiveMeeting(r);
    this.reuniaoService.setActiveMeeting(r);
    this.reuniaoAtiva = this.reuniaoService.getActiveMeeting();
    console.log(this.reuniaoAtiva.title);
  }

  onMove(): void {
    this.tituloReuniaoDuplicado = false;
  }

  ngOnInit(): void {
    this.reunioes = this.reuniaoService.getMeetings(this.usuarioService.getActiveUser());
  }

}
