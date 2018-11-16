import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-personas-component',
  templateUrl: './productos.component.html'
})
export class ProdutosComponent {
public productos: Producto[] = [];
  private titulo = 'Agregar  Producto';

  private myAppUrl: string;
  public produc: any
  categoria:any
  
  cate:any;
  mark:any;
  prov:any;
  producto:any;

  private Producx: {
    id: number;
    alerta: number;
    disponibles: number;
    precioCompra: number;
    precioVenta: string;
    productoCodigo: string;
    productoNombre: string;
    vencimiento: Date;
    categoriaId: number;
    marcaId: number;
    proveedorId: number;
  };
  public buttonDisabled: boolean;


  constructor(private _http: HttpClient) {
    this.myAppUrl = 'http://gamercash.info:8080/';
    this.produc = {};
    this.buttonDisabled = true;
    this.getproducto();
  }

  public getproducto() {
    this._http.get<Producto[]>(this.myAppUrl + 'productos').subscribe(result => {
      this.producto = result;
    }, error => console.error(error));
  }


  public getEmpleID(id) {
    this._http.get <categoria> (this.myAppUrl + '/productocategorias/' + id).subscribe(result =>  {
     this.categoria = result;
    }, error => console.error(error)); 
  }






  public agregar() {
    this.titulo = 'Nuevo Tipo Producto'
    this.buttonDisabled = false;

  }

  public Modificar(id) {
    this.titulo = 'Modificar Tipo Producto'
    this.getProductoId(id);
    this.buttonDisabled = false;
  }

  public Ver(id) {
    this.titulo = 'Ver Tipo Producto'
    this.getProductoId(id);
    this.buttonDisabled = true;
  }

  public getProductoId(id) {
    this._http.get<Producto>(this.myAppUrl + 'productos/' + id).subscribe(result => {
      this.produc = result;
    }, error => console.error(error));
  }


  public ProductNuevo()
{
  this._http.post<Producto>(this.myAppUrl + 'productos', 
{
/*
  usuarioClave: this.us.usuarioClave,
  usuarioNombre: this.us.usuarioNombre,
  empleadoId:this.emplemetodo ,
  rolId:this.rolmetodo
*/


alerta: this.produc.alerta,
disponibles: this.produc.disponibles,
precioCompra: this.produc.precioCompra,
precioVenta:  this.produc.precioVenta,
productoCodigo: this.produc.productoCodigo,
productoNombre: this.produc.productoNombre,
vencimiento: this.produc.vencimiento,
categoriaId: this.cate,
marcaId: this.mark,
proveedorId: this.prov




}
).subscribe(result =>  {
  console.log(result);
  this.getproducto();
 this.cate;
 this.mark;
 this.prov;
  //this.persona = result; 

  console.log(this.cate);
  console.log(this.mark);
  console.log(this.prov);
}, error => console.error(error)); 
/*
console.log("valor de us");
console.log(this.us.usuarioClave);
console.log(this.us.usuarioNombre);*/

}


  public updateExistencia(id: number) {
    this.getProductoId(id)
    this._http.put<Producto[]>(this.myAppUrl + 'productos/' + id, this.produc).subscribe(result => {
      this.reset();
      this.getproducto();
      //this.persona = result;         
    }, error => console.error(error));
  }

  public reset() {
    this.produc = {};
  }

  cat(c){
    this.cate=c.id;
    console.log(this.cate)

  }

  marc(m)
  {
    this.mark=m.id;
    console.log(this.mark)
  }

  proveedor(p)
  {
    this.prov=p.id;
    console.log(this.prov)
  }
}



interface Producto {
  id: number;
  alerta: number;
  disponibles: number;
  precioCompra: number;
  precioVenta: string;
  productoCodigo: string;
  productoNombre: string;
  vencimiento: Date;
  categoriaId: number;
  marcaId: number;
  proveedorId: number;

}

interface categoria{
  id: number,
  categoriaDescripcion: string,
  categoriaNombre: string

}

interface marcas{
  id: number,
  marcaDescripcion: string,
  marcaNombre: string

}




