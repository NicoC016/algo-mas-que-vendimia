import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/components/pages/notes/services/service-notes.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-create-new-note',
  templateUrl: './create-new-note.component.html',
  styleUrls: ['./create-new-note.component.css']
})
export class CreateNewNoteComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  public Editor:any = ClassicEditor;

  constructor(
    private formBuilder:FormBuilder, 
    private services:NotesService, 
    private router:Router, 
    private _flashMessagesService: FlashMessagesService
    ) {
    this.getData();
   }

  ngOnInit(): void {
  }

  getData(){
    this.form = this.formBuilder.group({
      title: new FormControl(""),
      subtitle: new FormControl(""),
      body: new FormControl(""),
      image: new FormControl(""),
      item: new FormControl(""),
      date: new FormControl(""),
      brandLabel: new FormControl(""),
      important: new FormControl(false),
      veryImportant: new FormControl(false)
    })
  }


  submitData(){
    if(this.form.value.title == '' || this.form.value.subtitle == '' || this.form.value.brandLabel == '' || this.form.value.body == '' || this.form.value.date == '' ){
      return this._flashMessagesService.show('Completar todos los campos', { cssClass: 'alert-danger', timeout: 4000 });
    }else {
      return this.services.createNewNote(this.form.value.title, this.form.value.subtitle, this.form.value.body, this.form.value.image, this.form.value.item,this.form.value.date, this.form.value.brandLabel, this.form.value.important, this.form.value.veryImportant).subscribe(() => {
        this._flashMessagesService.show('Nota creada correctamente', { cssClass: 'alert-success', timeout: 4000 });
        this.router.navigate(['']);
      })
    }
  }

}
