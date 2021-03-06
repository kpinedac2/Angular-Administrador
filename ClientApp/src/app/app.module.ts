import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';


/*administracion*/
import { HomeComponent } from './Admininistracion/home/home.component';
import { solicitudComponent } from './Admininistracion/solicitud/solicitud.component';
import { UsuariosComponent } from './Admininistracion/usuarios/usuarios.component';
import { MarcasComponent } from './Admininistracion/marcas/marcas.component';
import {PorcentajeComponent} from './Admininistracion/porcentaje/porcentaje.component';
import { TipoproductoComponent } from './Admininistracion/tipoproducto/tipoproducto.component';
import {ProdutosComponent} from './Admininistracion/productos/productos.component';
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
     solicitudComponent,
   
     MarcasComponent,
     PorcentajeComponent,
     TipoproductoComponent,
     ProdutosComponent,
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
       { path: 'solicitud', component: solicitudComponent },
       { path: 'marcas', component: MarcasComponent },
       { path: 'tipoproducto', component: TipoproductoComponent },
       { path: 'tipoventa', component: TipoventaComponent },
       { path: 'productos', component: ProdutosComponent }

       
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
