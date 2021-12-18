import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Recado } from './Recado';
import { Reuniao } from './reuniao';
import { ReuniaoService } from './reuniao.service';
import { MuralService } from './mural.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date!: Date;
  reuniao: Reuniao = { title: "", description: "", mural: [], date: this.date };
  reunioes: Reuniao[] = [];
  mural: Recado[] = [];
  recado: Recado = { author: "", content: "" };
  reuniaoService = new ReuniaoService();
  muralService = new MuralService();

  addMeeting(rn: Reuniao): void {
    this.date = new Date();
    this.reuniaoService.addMeeting(rn, this.date);
    this.reunioes.push(rn);
    this.reuniao = { title: "", description: "", mural: [], date: this.date };
  }
  addMessage(r: Recado): void {
    this.muralService.addMessage(r);
    this.mural.push(r);
    this.recado = { author: "", content: "" };
  }
}
