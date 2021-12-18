import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Recado } from './Recado';
import { Reuniao } from './reuniao';
import { ReuniaoService } from './reuniao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date!: Date;
  reuniao: Reuniao = {
    title: "", description: "", mural: [],
    date: this.date,
    addMessage: function (recado: Recado): void {
      this.mural.push(recado);
    }
  };
  recado: Recado = { author: "", content: "" };
  reuniaoService = new ReuniaoService();

  addMeeting(rn: Reuniao): void {
    this.date = new Date();
    this.reuniaoService.addMeeting(rn, this.date);
  }
  addMessage(r: Recado): void {
    this.reuniao.addMessage(r);
    this.recado = { author: "", content: "" };
  }
}
