import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';


/*administracion*/
import { HomeComponent } from './Admininistracion/home/home.component';
import { RolesComponent } from './Admininistracion/roles/roles.component';
import { UsuariosComponent } from './Admininistracion/usuarios/usuarios.component';
import { PermisosComponent } from './Admininistracion/permisos/permisos.component';
import { MarcasComponent } from './Admininistracion/marcas/marcas.component';
import {PorcentajeComponent} from './Admininistracion/porcentaje/porcentaje.component';
import { TipoproductoComponent } from './Admininistracion/tipoproducto/tipoproducto.component';
import {ExistenciaComponent} from './Admininistracion/existencias/existencias.component';
import {TipoventaComponent} from './Admininistracion/tipoventa/tipoventa.component';
import {EmpleadosComponent} from './Admininistracion/empleados/empleados.component';





@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
     /*Administracion*/
     HomeComponent,
     UsuariosComponent,
     RolesComponent,
     PermisosComponent,
     MarcasComponent,
     PorcentajeComponent,
     TipoproductoComponent,
     ExistenciaComponent,
     TipoventaComponent,
     EmpleadosComponent
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
       /*Administracion*/
       { path: 'empleados', component: EmpleadosComponent },
       { path: 'usuarios', component: UsuariosComponent },
       { path: 'roles', component: RolesComponent },
       { path: 'permisos', component: PermisosComponent },
       { path: 'marcas', component: MarcasComponent },
       { path: 'porcentajes', component: PorcentajeComponent },
       { path: 'tipoproducto', component: TipoproductoComponent },
       { path: 'existencias', component: ExistenciaComponent },
       { path: 'tipoventa', component: TipoventaComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
