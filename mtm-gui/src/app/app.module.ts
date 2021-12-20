import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { UsuarioService } from './usuario.service';
import { ReuniaoService } from './reuniao.service';
import { MuralService } from './mural.service';
import { LoginComponent } from './login/login.component';
import { ListaReunioesComponent } from './lista-reunioes/lista-reunioes.component';
import { MuralComponent } from './mural/mural.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    ListaReunioesComponent,
    MuralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UsuarioService, ReuniaoService, MuralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
