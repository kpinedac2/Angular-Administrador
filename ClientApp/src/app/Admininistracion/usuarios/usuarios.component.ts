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

  rolmetodo: any;
  emplemetodo:any;


  private  myAppUrl:string; 
  private us: {}; 
  private roll: {}; 
  private empleadito: {}; 
 
  public userx: {
    id:number; 
    usuarioClave:string; 
    usuarioNombre:string;
    empleadoId:number; 
    rolId:number; 
 
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
     this.titulo = 'Nuevo Usuario'
     this.buttonDisabled = false; 
     
   }
 
   public Modificar(id) {
     this.titulo = 'Modificar Nuevo Usuario'
     this.getUserID(id); 
     this.getRolID(id);
     this.getEmpleID(id);
     
     this.buttonDisabled = false; 
   }
 
   public Ver(id) {
     this.titulo = 'Ver Usuario'
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
  this._http.post <users> (this.myAppUrl + '/usuarios', 
{
/*
  usuarioClave: this.us.usuarioClave,
  usuarioNombre: this.us.usuarioNombre,
  empleadoId:this.emplemetodo ,
  rolId:this.rolmetodo
*/

usuarioClave: this.us.usuarioClave,
usuarioNombre: this.us.usuarioNombre,
empleadoId:this.emplemetodo ,
rolId:this.rolmetodo
}



).subscribe(result =>  {
    console.log(result);
    this.getus();
   this.emplemetodo;
   this.rolmetodo;
    //this.persona = result; 
  
    console.log(this.rolmetodo);
  }, error => console.error(error)); 
/*
console.log("valor de us");
console.log(this.us.usuarioClave);
console.log(this.us.usuarioNombre);*/

}
   
 
   public reset() {
     this.us =  {}; 
     this. rolmetodo= {}; 
     this. emplemetodo= {};
   }

   emple(e){   
     this.emplemetodo=e.id;
     console.log(this.emplemetodo)
   
   
     
   }

   role(r){   
    this.rolmetodo=r.id;
console.log(this.rolmetodo)
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
