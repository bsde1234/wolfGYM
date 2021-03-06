import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wolfGYM';
  usuario: User;
  cargando: boolean = true;
  loading: string = 'assets/img/loading.webp'

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe((usuario)=>{
      //Giving realness of login. :)
      setTimeout(()=>{
        this.cargando = false;
        this.usuario = usuario;
        console.log(usuario);
      }, 2000);
    })
  }
}

