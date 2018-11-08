import {HttpClient }from '@angular/common/http'; 
import {Component, Inject }from '@angular/core'; 


@Component( {
  selector:'app-personas-component', 
  templateUrl:'./porcentaje.component.html'  
})
export class PorcentajeComponent {
 public porcentajes:Porcentajes[] = [];
 private titulo = 'Agregar Porcentaje'; 

 private  myAppUrl:string; 
 private porcentaj: {}; 

 private porcentajex: {
  porcentajeId:number; 
  porcentajeDescripcion:string; 
}; 
 public buttonDisabled:boolean; 


  constructor(private _http:HttpClient) {
    this.myAppUrl = 'http://localhost:5000/'; 
    this.porcentaj =  {}; 
    this.buttonDisabled = true; 
    this.getPorcentaje(); 
  }

  public getPorcentaje() {
    this._http.get < Porcentajes[] > (this.myAppUrl + '/porcentajes').subscribe(result =>  {
      this.porcentajes = result; 
     }, error => console.error(error)); 
  }

  public agregar() {
    this.titulo = 'Nuevo Porcentaje'
    this.buttonDisabled = false; 
    
  }

  public Modificar(id) {
    this.titulo = 'Modificar Porcentaje'
    this.getPorcentajeID(id); 
    this.buttonDisabled = false; 
  }

  public Ver(id) {
    this.titulo = 'Ver Porcentaje'
    this.getPorcentajeID(id); 
    this.buttonDisabled = true; 
  }

  public getPorcentajeID(id) {
    this._http.get <Porcentajes> (this.myAppUrl + '/porcentajes/' + id).subscribe(result =>  {
     this.porcentaj = result;
    }, error => console.error(error)); 
  }

  

  public deleteId(persona) {
    var ans = confirm("Esta seguro de eliminar" + persona.nombre)
    if (ans) {
    this._http.delete < Porcentajes[] > (this.myAppUrl + '/porcentajes/' + persona.id).subscribe(result =>  {
    this.getPorcentaje(); 
    }, error => console.error(error)); }
     
  }
  

  public PorcentajeNuevo() {
    this._http.post <Porcentajes> (this.myAppUrl + '/porcentajes', this.porcentaj).subscribe(result =>  {
        this.reset(); 
        this.getPorcentaje(); 
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

  public updatePorcentaje(id:number){
    this.getPorcentajeID(id)
    this._http.put < Porcentajes[] > (this.myAppUrl + '/porcentajes/' + id, this.porcentaj).subscribe(result =>  {
      this.reset(); 
      this.getPorcentaje(); 
      //this.persona = result;         
     }, error => console.error(error)); 
  }

  public reset() {
    this.porcentaj =  {}; 
  }

}



interface Porcentajes {
  porcentajeId:number; 
  porcentajeDescripcion:string; 
}




