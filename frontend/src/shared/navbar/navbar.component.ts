import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { informationOfRoutes } from 'src/app/helpers/navbar.helper';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  public notAuthenticated:boolean = false;
  public routesVendimia: any[] = [];
  public openSidenav = false;

  @ViewChild('sidenav')sidenav!: ElementRef<any>;
  @ViewChild('main')main!: ElementRef<any>;
  constructor(
      public auth:AuthService,
      public route:Router,
    ) { }

  ngOnInit(): void {
    
    this.isAuthenticated();
    this.routesVendimia = informationOfRoutes;
  }
  ngAfterViewInit(): void {
    this.closeNav();
  }

  openNav() {
    this.openSidenav = true;
    if(this.sidenav !== null && this.main !== null) {
      this.main.nativeElement.style.paddingLeft = '300px';
      this.sidenav.nativeElement.style.width = '290px';
    }
  }

  closeNav() {
    this.openSidenav = false;
    if(this.sidenav !== null && this.main !== null) {
      this.main.nativeElement.style.paddingLeft = '15px';
      this.sidenav.nativeElement.style.width = '0px';;
    };
  }

  logout() {
    return this.auth.logout();
  }
  isAuthenticated(){
    this.auth.isAuthenticated$.subscribe(isAuthenticated=>{
      if(!isAuthenticated){
        return this.notAuthenticated = true
      }else{
        return this.notAuthenticated = false
      }
    })
  }

  navigate(routes:any){
    return this.route.navigate([routes])

  }

}
