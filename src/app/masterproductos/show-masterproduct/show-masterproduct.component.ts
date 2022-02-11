import { Component, OnInit } from '@angular/core';
import { MasterProductosComponent } from '../masterproduct.component';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-masterproduct',
  templateUrl: './show-masterproduct.component.html',
  styleUrls: ['./show-masterproduct.component.css']
})
export class ShowMasterproductComponent implements OnInit {

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
    this.ModalTitle="Editar Producto";
    this.ActivateAddEditMasterProductComp=true;
  }

  goToUsers() {
    this.router.navigate(['/usuario']);
  }

  goOut() {
    this.router.navigate(['/ingreso']);
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
