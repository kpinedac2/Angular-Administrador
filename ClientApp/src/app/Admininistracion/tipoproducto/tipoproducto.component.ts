import {HttpClient }from '@angular/common/http'; 
import {Component, Inject }from '@angular/core'; 


@Component( {
  selector:'app-personas-component', 
  templateUrl:'./tipoproducto.component.html'  
})
export class TipoproductoComponent {
 public tipoProduct:TipoProduct[] = [];
 private titulo = 'Agregar Tipo Producto'; 

 private  myAppUrl:string; 
 private TipProduct: {}; 

 private tipoproductox: {
  tipoProductosId:number; 
  tipoProductoDescripcion:string; 
}; 
 public buttonDisabled:boolean; 


  constructor(private _http:HttpClient) {
    this.myAppUrl = 'http://localhost:5000/'; 
    this.TipProduct =  {}; 
    this.buttonDisabled = true; 
    this.getTipoProducto(); 
  }

  public getTipoProducto() {
    this._http.get < TipoProduct[] > (this.myAppUrl + 'api/tipoproducto').subscribe(result =>  {
      this.tipoProduct = result; 
     }, error => console.error(error)); 
  }

  public agregar() {
    this.titulo = 'Nuevo Tipo Producto'
    this.buttonDisabled = false; 
    
  }

  public Modificar(id) {
    this.titulo = 'Modificar Tipo Producto'
    this.getTipoProductoID(id); 
    this.buttonDisabled = false; 
  }

  public Ver(id) {
    this.titulo = 'Ver Tipo Producto'
    this.getTipoProductoID(id); 
    this.buttonDisabled = true; 
  }

  public getTipoProductoID(id) {
    this._http.get <TipoProduct> (this.myAppUrl + 'api/tipoproducto/' + id).subscribe(result =>  {
     this.TipProduct = result;
    }, error => console.error(error)); 
  }

  

  public deleteId(persona) {
    var ans = confirm("Esta seguro de eliminar" + persona.nombre)
    if (ans) {
    this._http.delete < TipoProduct[] > (this.myAppUrl + 'api/tipoproducto/' + persona.id).subscribe(result =>  {
    this.getTipoProducto(); 
    }, error => console.error(error)); }
     
  }
  

  public TipoProductoNuevo() {
    this._http.post <TipoProduct> (this.myAppUrl + 'api/tipoproducto', this.TipProduct).subscribe(result =>  {
        this.reset(); 
        this.getTipoProducto(); 
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

  public updateTipoProducto(id:number){
    this.getTipoProductoID(id)
    this._http.put < TipoProduct[] > (this.myAppUrl + 'api/tipoproducto/' + id, this.TipProduct).subscribe(result =>  {
      this.reset(); 
      this.getTipoProducto(); 
      //this.persona = result;         
     }, error => console.error(error)); 
  }

  public reset() {
    this.TipProduct =  {}; 
  }

}



interface TipoProduct {
  tipoProductosId:number; 
  tipoProductoDescripcion:string; 
}




