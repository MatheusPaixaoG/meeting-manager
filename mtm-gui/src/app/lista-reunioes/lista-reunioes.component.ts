import { Component, OnInit } from '@angular/core';
import { Reuniao } from '../reuniao';
import { ReuniaoService } from '../reuniao.service';
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
    this.usuarioService.getActiveUser().subscribe({
      next: (result) => {
        this.usuarioAtivo = result;
        this.date = new Date();
        rn.participantes.push(this.usuarioAtivo.email);
        if (this.reuniaoService.addMeeting(rn, this.date, this.usuarioAtivo)) {
          this.reunioes.push(rn);
          this.reuniao = new Reuniao();
        } else {
          this.tituloReuniaoDuplicado = true;
        }
      },
      error: (result) => {
        console.log(result);
      }
    });
  }

  deslogar(): void {
    this.usuarioService.deslogar();
    console.log(this.usuarioAtivo.nome);
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
    this.usuarioService.getActiveUser().subscribe({
      next: (result) => {
        this.usuarioAtivo = result;
        this.reunioes = this.reuniaoService.getMeetings(this.usuarioAtivo);
      },
      error: (result) => {
        console.log(result);
      }
    });
  }

}
