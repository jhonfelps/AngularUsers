import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-view-modal-product',
  templateUrl: './view-modal-product.component.html',
  styleUrls: ['./view-modal-product.component.css']
})
export class ViewModalProductComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() masterproduct:any;
  Codigo!: 0;
  Nombre!: string;
  Descripcion!:string;
  Precio!:string;
  Imagen!:string;

  ngOnInit(): void {
    this.Codigo=this.masterproduct.Codigo;
    this.Nombre=this.masterproduct.Nombre;
    this.Descripcion=this.masterproduct.Descripcion;
    this.Precio=this.masterproduct.Precio;
    this.Imagen=this.masterproduct.Imagen;
  }

  addMasterproduct() {
    var val = {Codigo:this.Codigo,
              Nombre:this.Nombre,
              Descripcion:this.Descripcion,
              Precio:this.Precio,
              Imagen:this.Imagen}
    this.service.addMasterproduct(val).subscribe(res=>{
      alert(res.toString());
    });
  }
  updateMasterproduct() {
    var val = {Codigo:this.Codigo,
      Nombre:this.Nombre,
      Descripcion:this.Descripcion,
      Precio:this.Precio,
      Imagen:this.Imagen }
    this.service.updateMasterproduct(val).subscribe(res=>{
    alert(res.toString());
});
  }

}
