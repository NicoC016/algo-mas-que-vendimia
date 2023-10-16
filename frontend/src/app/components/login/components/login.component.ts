import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { FlashMessagesService } from 'flash-messages-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
      public auth: AuthService,
      public router:Router,
      public _flashMessagesService:FlashMessagesService
    ) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticated=>{
      this.auth.user$.subscribe((user:any)=>{
        if(isAuthenticated){
          this._flashMessagesService.show(`Bienvenido ${user.name}`, { cssClass: 'alert-success', timeout: 5000 })
          this.router.navigate(['/home']);
        }
      })
    })
  }
}

