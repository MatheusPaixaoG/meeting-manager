import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recado: Recado = { author: "", content: "" };
}

export class Recado {
  author!: string;//Mural sendo um array de Postagens e sendo um atributo da classe reunião
  content!: string;
}
