import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaReunioesComponent } from './lista-reunioes/lista-reunioes.component';
import { LoginComponent } from './login/login.component';
import { MuralComponent } from './mural/mural.component';
import { PaginaUsuarioComponent } from './pagina-usuario/pagina-usuario.component';


const routes: Routes = [
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'listaReunioes',
    component: ListaReunioesComponent
  },
  {
    path: 'mural',
    component: MuralComponent
  },
  {
    path: 'paginaInicial',
    component: AppComponent
  },
  {
    path: 'paginaUsuario',
    component: PaginaUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
