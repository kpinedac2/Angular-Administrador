import {HttpClient }from '@angular/common/http'; 
import {Component, Inject }from '@angular/core'; 


@Component( {
  selector:'app-permisos-component', 
  templateUrl:'./permisos.component.html'
})
export class PermisosComponent {
  public roles:Roles[] = [{id:1,
    nombre:"Super Administrador",
    descripcion:"Usuario con acceso total a los permisos y acciones."},
    {id:2,
    nombre:"Administrador",
    descripcion:"Usuario con permisos limitados de administracion."},
    {id:3,
    nombre:"Especialista",
    descripcion:"Usuario que gestiona informacion con los pacientes."}]; 
 private titulo = 'Agregar Permisos'; 

 private  myAppUrl:string; 
 private rol: {}; 
 public buttonDisabled:boolean; 
 private permisos:{};


  constructor(private _http:HttpClient, @Inject('BASE_URL')baseUrl:string) {
    this.myAppUrl = baseUrl; 
    this.rol =  {}; 
    this.buttonDisabled = true; 
    //this.getRoles(); 
  }

  public getRoles() {
    this._http.get < Roles[] > (this.myAppUrl + 'api/roles').subscribe(result =>  {
    this.roles = result; 
     }, error => console.error(error)); 
  }

  public getPermisos() {
    this._http.get(this.myAppUrl + 'api/permisos').subscribe(result =>  {
    this.permisos=result; 
     }, error => console.error(error)); 
  }

  public agregar() {
    this.titulo = 'Nuevos Permisos'
    this.buttonDisabled = false; 
    this.getPermisos();
  }

  public Modificar(id) {
    this.titulo = 'Modificar Permisos'
    this.buttonDisabled = false; 
    this.getPermisos();
  }

  public Ver(id) {
    this.titulo = 'Ver Vermisos'
    this.buttonDisabled = true; 
    this.getPermisos();
  }

  public reset() {
    this.rol =  {}; 
  }

}

interface Roles {
  id:number; 
  nombre:string; 
  descripcion:string; 
}




