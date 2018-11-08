import {HttpClient }from '@angular/common/http'; 
import {Component, Inject }from '@angular/core'; 


@Component( {
  selector:'app-roles-component', 
  templateUrl:'./roles.component.html'
})
export class RolesComponent {
 public roles:Roles[] = [{id:1,
                          nombre:"Super Administrador",
                          descripcion:"Usuario con acceso total a los permisos y acciones."},
                          {id:2,
                          nombre:"Administrador",
                          descripcion:"Usuario con permisos limitados de administracion."},
                          {id:3,
                          nombre:"Especialista",
                          descripcion:"Usuario que gestiona informacion con los pacientes."}]; 
 private titulo = 'Agregar Rol'; 

 private  myAppUrl:string; 
 private rol: {}; 
 public buttonDisabled:boolean; 


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

  public agregar() {
    this.titulo = 'Nueva Rol'
    this.buttonDisabled = false; 
    
  }

  public Modificar(id) {
    this.titulo = 'Modificar Rol'
    this.buttonDisabled = false; 
  }

  public Ver(id) {
    this.titulo = 'Ver Rol'
    this.buttonDisabled = true; 
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




