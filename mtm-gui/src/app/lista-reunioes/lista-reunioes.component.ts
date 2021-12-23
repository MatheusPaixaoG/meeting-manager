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
  data_inicio: any;
  data_fim: any;
  usuarioAtivo = new Usuario();
  reuniaoAtiva = new Reuniao();
  reunioes: Reuniao[] = [];
  reuniao: Reuniao = new Reuniao();
  tituloReuniaoDuplicado: boolean = false;

  addMeeting(rn: Reuniao): void {
    var dataInicioEntered = new Date(this.data_inicio);
    var dataFimEntered = new Date(this.data_fim);
    console.log(this.data_inicio);
    console.log(this.data_fim);
    console.log(dataInicioEntered);
    console.log(dataFimEntered);
    this.usuarioService.getActiveUser().subscribe({
      next: (result) => {
        this.usuarioAtivo = result;
        rn.participantes.push(this.usuarioAtivo.email);
        this.reuniaoService.addMeeting(rn, dataInicioEntered, dataFimEntered, this.usuarioAtivo).subscribe({
          next: (result) => {
            console.log(result);
            this.reunioes.push(result);
          },
          error: (result) => {
            console.log(result);
            this.tituloReuniaoDuplicado = true;
          }
        })
        // var retorno = this.reuniaoService.addMeeting(rn, dataInicioEntered, dataFimEntered, this.usuarioAtivo);
        // if (retorno) {
        //   this.reuniao = new Reuniao();
        // } else {
        // }
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
