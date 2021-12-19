import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioService } from './usuario.service';
import { ReuniaoService } from './reuniao.service';
import { MuralService } from './mural.service';

@NgModule({
  declarations: [
    AppComponent
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
