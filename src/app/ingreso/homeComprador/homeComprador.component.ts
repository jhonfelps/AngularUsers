import { Component, OnInit } from '@angular/core';
import { MasterProductosComponent } from '../../masterproductos/masterproduct.component';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './homeComprador.component.html',
  styleUrls: ['./homeComprador.component.css']
})
export class HomeCompradorComponent implements OnInit {

  constructor(private service:SharedService, private router:Router) { }

  MasterProductList:any=[];

  ModalTitle:string | undefined;
  ActivateAddEditMasterProductComp:boolean=false;
  masterproduct:any;

  ngOnInit(): void {
    this.refreshMasterProductList();
  }

  addClick() {
    this.masterproduct={
      Codigo:0,
      Nombre:"",
      Descripcion:"",
      Precio:"",
      Imagen:""
    }
    this.ModalTitle ="Agregar Producto";
    this.ActivateAddEditMasterProductComp =true;
  }

  closeClick() {
    this.ActivateAddEditMasterProductComp=false;
    this.refreshMasterProductList();
  }
  editClick(item: any) {
    this.masterproduct=item;
    this.ModalTitle=item.Nombre;
    this.ActivateAddEditMasterProductComp=true;
  }

  goToUsers() {
    this.router.navigate(['/usuario']);
  }

  deleteClick(item: any) {
    if(confirm('Estas seguro que deseas eliminar el producto?')){
      this.service.deleteMasterProduct(item.Id).subscribe(data=>{
        alert(data.toString());
        this.refreshMasterProductList();
      })
    }
  }

  refreshMasterProductList(){
    this.service.getMasterProductList().subscribe(data=>{
      this.MasterProductList = data;
    });
  }

}
