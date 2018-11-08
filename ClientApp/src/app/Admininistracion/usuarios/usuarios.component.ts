import {HttpClient }from '@angular/common/http'; 
import {Component, Inject }from '@angular/core'; 


@Component( {
  selector:'app-usuarios-component', 
  templateUrl:'./usuarios.component.html'
})
export class UsuariosComponent {
  public usuariosX:users[] = [];
  private titulo = 'Agregar Tipo Producto'; 
  usuarios: Array<users> = [];

  empleado: Array<empleados>=[];

  roles: Array<roles>=[];




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
     this.myAppUrl = 'http://localhost:5000'; 
     this.us =  {}; 
     this.roll={};
     this.empleadito={};
     this.buttonDisabled = true; 
     this.getus(); 
     this.getemplo();
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
    this._http.get <users> (this.myAppUrl + '/empleados/' + id).subscribe(result =>  {
     this.empleadito = result;
    }, error => console.error(error)); 
  }

  public getRolID(id) {
    this._http.get <users> (this.myAppUrl + '/roles/' + id).subscribe(result =>  {
     this.roll = result;
    }, error => console.error(error)); 
  }
   
 
   public deleteId(persona) {
     var ans = confirm("Esta seguro de eliminar" + persona.nombre)
     if (ans) {
     this._http.delete < users[] > (this.myAppUrl + '/usuarios/' + persona.id).subscribe(result =>  {
      this.getus(); 
      this.getemplo();
      this.getRol();
     }, error => console.error(error)); }
      
   }
   
 
   public UserNuevo() {
     this._http.post <users> (this.myAppUrl + '/usuarios', this.us).subscribe(result =>  {
         this.reset(); 
         this.getus(); 
         this.getemplo();
         this.getRol();
         //this.persona = result; 
         console.log(result);
       }, error => console.error(error)); 
 /*
     if (this.marca == undefined) {
         this._http.post <Marcas> (this.myAppUrl + 'api/marcas', this.marca).subscribe(result =>  {
         this.reset(); 
         this.getMarcas(); 
         //this.persona = result; 
         console.log(result);
         }, error => console.error(error)); 
     }else {
          this._http.put < Marcas[] > (this.myAppUrl + 'api/marcas/' + this.marca.marcasId, this.marca).subscribe(result =>  {
         this.reset(); 
         this.getMarcas(); 
         //this.persona = result;         
        }, error => console.error(error)); 
 
        
     }
 
     */
   }
 
 
 
 
 
   public updateUser(id:number){
     this.getUserID(id)
     this.getRolID(id)
     this.getEmpleID(id)
     this._http.put < users[] > (this.myAppUrl + '/usuarios/' + id, this.us).subscribe(result =>  {
       this.reset(); 
       this.getus(); 
       this.getemplo();
       this.getRol();
    
       //this.persona = result;         
      }, error => console.error(error)); 
   }
   
 
   public reset() {
     this.us =  {}; 
     this. roll= {}; 
     this. empleadito= {};
   }
 
 }
 


 interface users {
  id:number; 
  usuarioClave:string; 
  usuarioNombre:string;
  empleadoId:number; 
  rolId:string; 
 

}


interface roles {
  id:number; 
  rol:string; 
}

interface empleados {
  id:number; 
  nombres:string; 
  apellidos:string;
  direccion:string; 
  edad:string; 
  sexo:string;
  sueldo:string; 
  telefono:string; 

}



interface users {
  id:number; 
  usuarioClave:string; 
  usuarioNombre:string;
  empleadoId:number; 
  rolId:string; 
 

}
