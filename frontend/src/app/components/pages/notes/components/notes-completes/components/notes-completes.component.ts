import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from 'src/app/components/pages/notes/services/service-notes.service';
import { map } from 'rxjs/operators';
import { NotesDTO } from 'src/app/models/notes.model';
import { AuthService } from '@auth0/auth0-angular';
import { FlashMessagesService } from 'flash-messages-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-notes-completes',
  templateUrl: './notes-completes.component.html',
  styleUrls: ['./notes-completes.component.css']
})
export class NotesCompletesComponent implements OnInit {
  public oneNote: any
  public values: any
  public note:NotesDTO[]= []
  public etiquetas:any =[]
  public Editor:any = ClassicEditor;

  constructor(
    private services: NotesService,
    private route: ActivatedRoute,
    public auth:AuthService,
    private router:Router,
    private _flashMessagesService:FlashMessagesService
  ) { }

  ngOnInit(): void {
    this.getNotesById()

  }

  getNotesById() {
    debugger

    this.oneNote = this.route.paramMap.subscribe((values) => {
      this.values = values
    })

    this.services.getNoteByid(this.values.params.id)
      .pipe(
        map((res) => {
          debugger
          var htmlObject = document.createElement('div');
          htmlObject.innerHTML = res.body
          document.body.appendChild(htmlObject)
          res.date = new Date(res.date).toLocaleString("es-ES" ,{weekday:'long', day: "2-digit", month: "long", year: "numeric"});
          res.date = res.date[0].toUpperCase() + res.date.substring(1)
          return res
        })
      ).subscribe((res)=>{
        this.note.push(res)
      })
  }

  deleteNote(id:string){
    this.services.delete(id)
    .pipe(map(
      res=>{
        if(res){
          this.router.navigate(['/home'])
          this._flashMessagesService.show('Nota eliminada correctamente',{ cssClass: 'alert-success', timeout: 4000 })
        }
    }))
    .subscribe()
  }
  editNote(id:string | null){
    this.router.navigate(['notes', 'edit', id])

  }

}
