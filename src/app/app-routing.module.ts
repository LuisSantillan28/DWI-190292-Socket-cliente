import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { Usuario } from './classes/usuario';
import { UsuarioGuardService } from './guards/usuario-guard.service';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'mensajes',
    component: MensajesComponent,
    canActivate: [UsuarioGuardService],
  },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
