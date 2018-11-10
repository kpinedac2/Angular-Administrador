import {HttpClient }from '@angular/common/http'; 
import {Component, Inject }from '@angular/core'; 


@Component( {
  selector:'app-solicitud-component', 
  templateUrl:'./solicitud.component.html'
})
export class solicitudComponent {
  public solicitudes:Solicitud[] = [];
  private titulo = 'Agregar Solicitud'; 
 
  private  myAppUrl:string; 
  private soli: {}; 
 
  private solicitudx: {
    id:number; 
    horasPermiso:string; 
    solicitudDescripcion:string; 
    solicitudEstado:string;
    solicitudFecha : Date,
    tipoSolicitudId : number,
    usuarioId : number,
    rolId:number
 }; 
  public buttonDisabled:boolean; 
 
 
   constructor(private _http:HttpClient) {
     this.myAppUrl = 'http://gamercash.info:8080'; 
     this.soli =  {}; 
     this.buttonDisabled = true; 
     this.getsoli(); 
   }
 
   public getsoli() {
     this._http.get < Solicitud[] > (this.myAppUrl + '/solicitudes').subscribe(result =>  {
       this.solicitudes = result; 
      }, error => console.error(error)); 
   }
 
   public agregar() {
     this.titulo = 'Nueva Solicitud'
     this.buttonDisabled = false; 
     
   }
 
   public Modificar(id) {
     this.titulo = 'Modificar Solicitud'
     this.getSoliId(id); 
     this.buttonDisabled = false; 
   }
 
   public Ver(id) {
     this.titulo = 'Ver Solicitud'
     this.getSoliId(id); 
     this.buttonDisabled = true; 
   }
 
   public getSoliId(id) {
     this._http.get <Solicitud> (this.myAppUrl + '/solicitudes/' + id).subscribe(result =>  {
      this.soli = result;
     }, error => console.error(error)); 
   }
 
   
 
      
   
 
   public nuevaSoli() {
     this._http.post <Solicitud> (this.myAppUrl + '/solicitudes', this.soli).subscribe(result =>  {
       console.log(this.soli);
         this.reset(); 
         this.getsoli(); 
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
 
   public updateSoli(id:number){
     this.getSoliId(id)
     this._http.put < Solicitud[] > (this.myAppUrl + '/solicitudes/' + id, this.soli).subscribe(result =>  {
       this.reset(); 
       this.getsoli(); 
       //this.persona = result;         
      }, error => console.error(error)); 
   }
 
   public reset() {
     this.soli =  {}; 
   }
 
 }
 
 
 
 interface Solicitud {
  id:number; 
  horasPermiso:string; 
  solicitudDescripcion:string; 
  solicitudEstado:string;
  solicitudFecha : Date,
  tipoSolicitudId : number,
  usuarioId : number,
  rolId:number

 }
 