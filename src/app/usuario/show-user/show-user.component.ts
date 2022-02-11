import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../usuario.component';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  constructor(private service:SharedService, private router:Router) { }

  UsuarioList:any=[];

  ModalTitle:string | undefined;
  ActivateAddEditUserComp:boolean=false;
  user:any;

  ngOnInit(): void {
    this.refreshUserList();
  }

  addClick() {
    this.user={
      Id:0,
      Nombre:"",
      Apellido:"",
      Tipo_documento:"",
      Documento:"",
      Correo:"",
      Clave:""
    }
    this.ModalTitle ="Agregar Usuario";
    this.ActivateAddEditUserComp =true;
  }

  closeClick() {
    this.ActivateAddEditUserComp=false;
    this.refreshUserList();
  }
  editClick(item: any) {
    this.user=item;
    this.ModalTitle="Editar Usuario";
    this.ActivateAddEditUserComp=true;
  }

  goToProducts() {
    this.router.navigate(['/productos']);
  }

  goOut() {
    this.router.navigate(['/ingreso']);
  }

  deleteClick(item: any) {
    if(confirm('Estas seguro que deseas eliminar el usuario?')){
      this.service.deleteUser(item.Id).subscribe(data=>{
        alert(data.toString());
        this.refreshUserList();
      })
    }
  }

  refreshUserList(){
    this.service.getUserList().subscribe(data=>{
      this.UsuarioList = data;
    });
  }

}
