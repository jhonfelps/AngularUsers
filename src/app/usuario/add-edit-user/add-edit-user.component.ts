import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() user:any;
  Id!: 0;
  Nombre!: string;
  Apellido!:string;
  Tipo_documento!:string;
  Documento!:string;
  Correo!:string;
  Clave!:string;
  Rol!:string;

  ngOnInit(): void {
    this.Id=this.user.Id;
    this.Nombre=this.user.Nombre;
    this.Apellido=this.user.Apellido;
    this.Tipo_documento=this.user.Tipo_documento;
    this.Documento=this.user.Documento;
    this.Correo=this.user.Correo;
    this.Clave=this.user.Clave;
    this.Rol=this.user.Rol;
  }

  addUser() {
    var val = {Id:this.Id,
              Nombre:this.Nombre,
              Apellido:this.Apellido,
              Tipo_documento:this.Tipo_documento,
              Documento:this.Documento,
              Correo:this.Correo,
              Clave:this.Clave,
              Rol:this.Rol }
    this.service.addUser(val).subscribe(res=>{
      alert(res.toString());
    });
  }
  updateUser() {
    var val = {Id:this.Id,
      Nombre:this.Nombre,
      Apellido:this.Apellido,
      Tipo_documento:this.Tipo_documento,
      Documento:this.Documento,
      Correo:this.Correo,
      Clave:this.Clave,
      Rol:this.Rol }
    this.service.updateUser(val).subscribe(res=>{
    alert(res.toString());
});
  }

}
