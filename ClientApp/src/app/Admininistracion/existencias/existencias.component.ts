import {HttpClient }from '@angular/common/http'; 
import {Component, Inject }from '@angular/core'; 


@Component( {
  selector:'app-personas-component', 
  templateUrl:'./existencias.component.html'  
})
export class ExistenciaComponent {
 public exist:Existencia[] = [];
 private titulo = 'Agregar Tipo Producto'; 

 private  myAppUrl:string; 
 private Existe: {}; 

 private tipoproductox: {
  existenciasId:number; 
  existenciasProductos:string; 
  existenciascantidad:string;
}; 
 public buttonDisabled:boolean; 


  constructor(private _http:HttpClient) {
    this.myAppUrl = 'http://localhost:5000/'; 
    this.Existe =  {}; 
    this.buttonDisabled = true; 
    this.getExistencia(); 
  }

  public getExistencia() {
    this._http.get < Existencia[] > (this.myAppUrl + 'api/existencias').subscribe(result =>  {
      this.exist = result; 
     }, error => console.error(error)); 
  }

  public agregar() {
    this.titulo = 'Nuevo Tipo Producto'
    this.buttonDisabled = false; 
    
  }

  public Modificar(id) {
    this.titulo = 'Modificar Tipo Producto'
    this.getExistenciaID(id); 
    this.buttonDisabled = false; 
  }

  public Ver(id) {
    this.titulo = 'Ver Tipo Producto'
    this.getExistenciaID(id); 
    this.buttonDisabled = true; 
  }

  public getExistenciaID(id) {
    this._http.get <Existencia> (this.myAppUrl + 'api/existencias/' + id).subscribe(result =>  {
     this.Existe = result;
    }, error => console.error(error)); 
  }

  

  public deleteId(persona) {
    var ans = confirm("Esta seguro de eliminar" + persona.nombre)
    if (ans) {
    this._http.delete < Existencia[] > (this.myAppUrl + 'api/existencias/' + persona.id).subscribe(result =>  {
    this.getExistencia(); 
    }, error => console.error(error)); }
     
  }
  

  public ExistenciaNueva() {
    this._http.post <Existencia> (this.myAppUrl + 'api/existencias', this.Existe).subscribe(result =>  {
        this.reset(); 
        this.getExistencia(); 
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

  public updateExistencia(id:number){
    this.getExistenciaID(id)
    this._http.put < Existencia[] > (this.myAppUrl + 'api/existencias/' + id, this.Existe).subscribe(result =>  {
      this.reset(); 
      this.getExistencia(); 
      //this.persona = result;         
     }, error => console.error(error)); 
  }

  public reset() {
    this.Existe =  {}; 
  }

}



interface Existencia {
  existenciasId:number; 
  existenciasProductos:string; 
  existenciascantidad:string;
}




