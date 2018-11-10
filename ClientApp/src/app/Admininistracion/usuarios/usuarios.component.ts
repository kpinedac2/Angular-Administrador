import {HttpClient }from '@angular/common/http'; 
import {Component, Inject }from '@angular/core'; 


@Component( {
  selector:'app-usuarios-component', 
  templateUrl:'./usuarios.component.html'
})
export class UsuariosComponent {
  public usuariosX:users[] = [];
  private titulo = 'Agregar Tipo Producto'; 
  usuarios:any;

  empleado:any;

  roles: any;



  private  myAppUrl:string; 
  private us: {}; 
  private roll: {}; 
  private empleadito: {}; 
 
  private userx: {
    id:number; 
    usuarioClave:string; 
    usuarioNombre:string;
    empleadoId:number; 
    rolId:string; 
 
 };  
 private empeladox: {
  id:number; 
  nombres:string; 
  apellidos:string;
  direccion:string; 
  edad:string; 
  sexo:string;
  sueldo:string; 
  telefono:string; 

};  
private rolx: {
  id:number; 
  rol:string; 


};  
  public buttonDisabled:boolean; 
 
 
   constructor(private _http:HttpClient) {
     this.myAppUrl = 'http://gamercash.info:8080'; 
     this.us =  {}; 
     this.roll={};
     this.empleadito={};
     this.buttonDisabled = true; 
     this.getus(); 
     this.getemplo();
     this.getRol();
   
     
     
   }
 

 

   public getus() {
     this._http.get < users[] > (this.myAppUrl + '/usuarios').subscribe(result =>  {
       this.usuarios = result; 
      }, error => console.error(error)); 
   }

    
   public getemplo() {
    this._http.get < empleados[] > (this.myAppUrl + '/empleados').subscribe(result =>  {
      this.empleado = result; 
     }, error => console.error(error)); 
  }

  public getRol() {
    this._http.get < roles[] > (this.myAppUrl + '/roles').subscribe(result =>  {
      this.roles = result; 
     }, error => console.error(error)); 
  }

 
   public agregar() {
     this.titulo = 'Nuevo Empleado'
     this.buttonDisabled = false; 
     
   }
 
   public Modificar(id) {
     this.titulo = 'Modificar Nuevo Empleado'
     this.getUserID(id); 
     this.getRolID(id);
     this.getEmpleID(id);
     
     this.buttonDisabled = false; 
   }
 
   public Ver(id) {
     this.titulo = 'Ver Empleado'
     this.getUserID(id); 
     this.getRolID(id);
     this.getEmpleID(id);
     this.buttonDisabled = true; 
   }
 
   public getUserID(id) {
     this._http.get <users> (this.myAppUrl + '/usuarios/' + id).subscribe(result =>  {
      this.us = result;
     }, error => console.error(error)); 
   }
 
   public getEmpleID(id) {
    this._http.get <empleados> (this.myAppUrl + '/empleados/' + id).subscribe(result =>  {
     this.empleadito = result;
    }, error => console.error(error)); 
  }

  public getRolID(id) {
    this._http.get <roles> (this.myAppUrl + '/roles/' + id).subscribe(result =>  {
     this.roll = result;
    }, error => console.error(error)); 
  }
 

public guardar()
{
  this._http.post <users> (this.myAppUrl + '/usuarios', this.us).subscribe(result =>  {
    console.log(result);
    this.reset(); 
    this.getus();
    this.getRol();
    this.getemplo();
    //this.persona = result; 
    console.log(result);
  }, error => console.error(error)); 


}
   
 
   public reset() {
     this.us =  {}; 
     this. roll= {}; 
     this. empleadito= {};
   }
 
 }
 




interface roles {
  id:0; 
  rol:string; 
}

interface empleados {
  id:0; 
  nombres:string; 
  apellidos:string;
  direccion:string; 
  edad:string; 
  sexo:string;
  sueldo:string; 
  telefono:string; 

}



interface users {
  id:0; 
  usuarioClave:string; 
  usuarioNombre:string;
  empleadoId:number; 
  rolId:string; 

}
