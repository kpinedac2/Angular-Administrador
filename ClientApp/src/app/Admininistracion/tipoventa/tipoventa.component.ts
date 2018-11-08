import {HttpClient }from '@angular/common/http'; 
import {Component, Inject }from '@angular/core'; 


@Component( {
  selector:'app-personas-component', 
  templateUrl:'./tipoventa.component.html'  
})
export class TipoventaComponent {
 public tipoventas:TipoVenta[] = [];
 private titulo = 'Agregar Tipo Venta'; 

 private  myAppUrl:string; 
 private tipvent: {}; 

 private tipoventax: {
  tipoVentaId:number; 
  tipoVentaDescripcion:string; 
}; 
 public buttonDisabled:boolean; 


  constructor(private _http:HttpClient) {
    this.myAppUrl = 'http://localhost:5000/'; 
    this.tipvent =  {}; 
    this.buttonDisabled = true; 
    this.getTipoVenta(); 
  }

  public getTipoVenta() {
    this._http.get < TipoVenta[] > (this.myAppUrl + 'api/tipoventa').subscribe(result =>  {
      this.tipoventas = result; 
     }, error => console.error(error)); 
  }

  public agregar() {
    this.titulo = 'Nuevo Tipo Venta'
    this.buttonDisabled = false; 
    
  }

  public Modificar(id) {
    this.titulo = 'Modificar Tipo Venta'
    this.getTipoVentaID(id); 
    this.buttonDisabled = false; 
  }

  public Ver(id) {
    this.titulo = 'Ver  Tipo Venta'
    this.getTipoVentaID(id); 
    this.buttonDisabled = true; 
  }

  public getTipoVentaID(id) {
    this._http.get <TipoVenta> (this.myAppUrl + 'api/tipoventa/' + id).subscribe(result =>  {
     this.tipvent = result;
    }, error => console.error(error)); 
  }

  

  public deleteId(persona) {
    var ans = confirm("Esta seguro de eliminar" + persona.nombre)
    if (ans) {
    this._http.delete < TipoVenta[] > (this.myAppUrl + 'api/tipoventa/' + persona.id).subscribe(result =>  {
    this.getTipoVenta(); 
    }, error => console.error(error)); }
     
  }

  public TipoVentaNuevo() {
    this._http.post <TipoVenta> (this.myAppUrl + 'api/tipoventa', this.tipvent).subscribe(result =>  {
        this.reset(); 
        this.getTipoVenta(); 
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

  public updateTipoVenta(id:number){
    this.getTipoVentaID(id)
    this._http.put < TipoVenta[] > (this.myAppUrl + 'api/tipoventa/' + id, this.tipvent).subscribe(result =>  {
      this.reset(); 
      this.getTipoVenta(); 
      //this.persona = result;         
     }, error => console.error(error)); 
  }

  public reset() {
    this.tipvent =  {}; 
  }

}



interface TipoVenta {
  tipoVentaId:number; 
  tipoVentaDescripcion:string; 
}




