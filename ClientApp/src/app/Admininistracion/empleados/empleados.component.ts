import {HttpClient }from '@angular/common/http'; 
import {Component, Inject }from '@angular/core'; 


@Component( {
  selector:'app-personas-component', 
  templateUrl:'./empleados.component.html'  
})
export class EmpleadosComponent {
 public empleado:Employer[] = [];
 private titulo = 'Agregar Tipo Producto'; 

 private  myAppUrl:string; 
 private emple: {}; 

 private employerx: {
  id:number; 
  nombres:string; 
  apellidos:string;
  direccion:string; 
  edad:string; 
  sexo:string;
  sueldo:string; 
  telefono:string; 

};  
 public buttonDisabled:boolean; 


  constructor(private _http:HttpClient) {
    this.myAppUrl = 'http://gamercash.info:8080'; 
    this.emple =  {}; 
    this.buttonDisabled = true; 
    this.getEmpleado(); 
  }

  public getEmpleado() {
    this._http.get < Employer[] > (this.myAppUrl + '/empleados').subscribe(result =>  {
      this.empleado = result; 
     }, error => console.error(error)); 
  }

  public agregar() {
    this.titulo = 'Nuevo Empleado'
    this.buttonDisabled = false; 
    
  }

  public Modificar(id) {
    this.titulo = 'Modificar Nuevo Empleado'
    this.getEmpleadoID(id); 
    this.buttonDisabled = false; 
  }

  public Ver(id) {
    this.titulo = 'Ver Empleado'
    this.getEmpleadoID(id); 
    this.buttonDisabled = true; 
  }

  public getEmpleadoID(id) {
    this._http.get <Employer> (this.myAppUrl + '/empleados/' + id).subscribe(result =>  {
     this.emple = result;
    }, error => console.error(error)); 
  }

  

  public deleteId(persona) {
    var ans = confirm("Esta seguro de eliminar" + persona.nombre)
    if (ans) {
    this._http.delete < Employer[] > (this.myAppUrl + '/empleados/' + persona.id).subscribe(result =>  {
    this.getEmpleado(); 
    }, error => console.error(error)); }
     
  }
  

  public EmpleadoNuevo() {
    this._http.post <Employer> (this.myAppUrl + '/empleados', this.emple).subscribe(result =>  {
        this.reset(); 
        this.getEmpleado(); 
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





  public updateEmpl(id:number){
    this.getEmpleadoID(id)
    this._http.put < Employer[] > (this.myAppUrl + '/empleados/' + id, this.emple).subscribe(result =>  {
      this.reset(); 
      this.getEmpleado(); 
      //this.persona = result;         
     }, error => console.error(error)); 
  }
  

  public reset() {
    this.emple =  {}; 
  }

}



interface Employer {
  id:number; 
  nombres:string; 
  apellidos:string;
  direccion:string; 
  edad:string; 
  sexo:string;
  sueldo:string; 
  telefono:string; 

}




