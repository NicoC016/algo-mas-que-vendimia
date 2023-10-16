import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { NotesService } from 'src/app/components/pages/notes/services/service-notes.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '@auth0/auth0-angular';
import { FlashMessagesService } from 'flash-messages-angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public result:any = [];
  public newArrayNotes:any = [];
  public notes:any;
  public imageImportant:any;

  constructor(
    private services:NotesService,
    private router: Router,
    private sanitizer:DomSanitizer,
    public auth:AuthService,
    public _flashMessagesService:FlashMessagesService
    ) { }

  ngOnInit(): void {
    this.getAllNotes()

  }
  getAllNotes(){
    return this.services.getAll().pipe(
      map(res=>{
        res.map(notes=>{
          if(!notes.isVeryImportant){
            this.newArrayNotes.push(notes);
          }else {
            this.imageImportant = this.sanitizer.bypassSecurityTrustStyle(`url(${notes.image})`);
            this.result.push(notes);
          }
          if(notes.date !== ''){
            notes.date = new Date( notes.date).toLocaleString("es-ES" ,{weekday:'long' ,day: "2-digit", month: "long", year: "numeric"});
          }
        })
      })
    ).subscribe();
  }

  navigateById(id:string | null){
    return this.router.navigate(['notes', 'view', id]);
  }

  
}
