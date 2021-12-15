import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Mural } from './mural';
import { Recado } from './Recado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recado: Recado = { author: "", content: "" };
  mural = new Mural();

  addMessage(r: Recado): void {
    this.mural.addMessage(r);
    this.recado = { author: "", content: "" };
  }
}
