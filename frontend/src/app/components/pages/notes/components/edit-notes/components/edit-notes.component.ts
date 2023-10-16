import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { map } from 'rxjs/operators';
import { NotesDTO } from 'src/app/models/notes.model';
import { NotesService } from 'src/app/components/pages/notes/services/service-notes.service';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.css']
})
export class EditNotesComponent implements OnInit {
  public oneNote: any
  public values: any
  public note:NotesDTO[]= []
  form: FormGroup = new FormGroup({})

  constructor(
    private services: NotesService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router:Router,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit(): void {
    this.getNotesById()
  }


  getNotesById() {
    this.oneNote = this.route.paramMap.subscribe((values) => {
      this.values = values
    })

    this.services.getNoteByid(this.values.params.id)
      .pipe(
        map((res) => {
          res.date = new Date(res.date).toLocaleString("es-ES" ,{weekday:'long', day: "2-digit", month: "long", year: "numeric"});
          res.date = res.date[0].toUpperCase() + res.date.substring(1)
          this.form = this.formBuilder.group({
            title: new FormControl(res.title),
            subtitle: new FormControl(res.subtitle),
            body: new FormControl(res.body),
            image: new FormControl(res.image),
            item: new FormControl(res.item),
            date: new FormControl(res.date),
            brandLabel: new FormControl(res.brandLabel),
            important: new FormControl(res.isImportant),
            veryImportant: new FormControl(res.isVeryImportant)
          })
          this.note.push(res)
        })
      ).subscribe()
  }

  editNote(id:string){
    this.services.editNote(id, this.form.value)
    .pipe(
      map(res=>{
        if (res){
          this._flashMessagesService.show('Nota editada correctamente', { cssClass: 'alert-success', timeout: 4000 })
          this.router.navigate(['/home'])
        }else{
          this._flashMessagesService.show('Error al editar la nota', { cssClass: 'alert-danger', timeout: 4000 })
        }
      })
    )
    .subscribe()
  }


}
