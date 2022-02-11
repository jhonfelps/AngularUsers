import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  constructor(private service:SharedService, private router:Router) { }

  usuario:any;
  username!: string;
  Id!:0;
  Correo!:string;
  Clave!:string;
  ngOnInit(): void {
    this.usuario={
      Id:0,
      Nombre:"",
      Apellido:"",
      Tipo_documento:"",
      Documento:"",
      Correo:"",
      Clave:"",
      Rol:""
    }
  }

  loginUser() {
    var val = {
      Id:0,
      Correo:this.Correo,
      Clave:this.Clave }
    this.service.loginUser(val).subscribe(res=>{
      if(res.toString()==="Administrador"){
        //console.log(res.toString());
        this.router.navigate(['/ingreso/home']);
      } else if(res.toString()==="Comprador") {
        this.router.navigate(['/ingreso/homeComprador']);
      } else {
        alert(res.toString());
      }
    });
  }
  Volver() {
    this.router.navigate(['/usuario']);
  }
}
