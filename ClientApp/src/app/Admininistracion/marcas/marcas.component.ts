import {HttpClient }from '@angular/common/http'; 
import {Component, Inject }from '@angular/core'; 


@Component( {
  selector:'app-personas-component', 
  templateUrl:'./marcas.component.html'  
})
export class MarcasComponent {
 public marcas:Marcas[] = [];
 private titulo = 'Agregar Marca'; 

 private  myAppUrl:string; 
 private marca: {}; 

 private marcax: {
  id:number; 
  marcaDescripcion:string; 
  marcaNombre:string; 

}; 
 public buttonDisabled:boolean; 


  constructor(private _http:HttpClient) {
    this.myAppUrl = 'http://gamercash.info:8080'; 
    this.marca =  {}; 
    this.buttonDisabled = true; 
    this.getMarcas(); 
  }

  public getMarcas() {
    this._http.get < Marcas[] > (this.myAppUrl + '/marcas').subscribe(result =>  {
      this.marcas = result; 
     }, error => console.error(error)); 
  }

  public agregar() {
    this.titulo = 'Nueva Marca'
    this.buttonDisabled = false; 
    
  }

  public Modificar(id) {
    this.titulo = 'Modificar Marca'
    this.getMarcaID(id); 
    this.buttonDisabled = false; 
  }

  public Ver(id) {
    this.titulo = 'Ver Marca'
    this.getMarcaID(id); 
    this.buttonDisabled = true; 
  }

  public getMarcaID(id) {
    this._http.get <Marcas> (this.myAppUrl + '/marcas/' + id).subscribe(result =>  {
     this.marca = result;
    }, error => console.error(error)); 
  }

  

  public deleteId(persona) {
    var ans = confirm("Esta seguro de eliminar" + persona.nombre)
    if (ans) {
    this._http.delete < Marcas[] > (this.myAppUrl + '/marcas/' + persona.id).subscribe(result =>  {
    this.getMarcas(); 
    }, error => console.error(error)); }
     
  }

  public MarcaNueva() {
    this._http.post <Marcas> (this.myAppUrl + '/marcas', this.marca).subscribe(result =>  {
      console.log(this.marca);
        this.reset(); 
        this.getMarcas(); 
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

  public updateMarca(id:number){
    this.getMarcaID(id)
    this._http.put < Marcas[] > (this.myAppUrl + '/marcas/' + id, this.marca).subscribe(result =>  {
      this.reset(); 
      this.getMarcas(); 
      //this.persona = result;         
     }, error => console.error(error)); 
  }

  public reset() {
    this.marca =  {}; 
  }

}



interface Marcas {
  id:number; 
  marcaDescripcion:string; 
  marcaNombre:string; 

}




