import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotesDTO } from '../../../../models/notes.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }
  public _URL = "http://localhost:3000/notes"

  getAll(): Observable<NotesDTO[]>{
    return this.http.get<NotesDTO[]>(this._URL);
  }

  createNewNote(title:string, subtitle:string, body:string, image:string, item:string, date:Date, brandLabel:string, isImportant:boolean, isVeryImportant:boolean):Observable<NotesDTO>{
    return this.http.post<NotesDTO>(this._URL,
      {
        title:title,
        subtitle:subtitle,
        body:body,
        image:image,
        item:item,
        date:date,
        brandLabel:brandLabel,
        isImportant:isImportant,
        isVeryImportant:isVeryImportant
      }
    )
  }

  getNoteByid(id:string ):Observable<NotesDTO>{
    return this.http.get<NotesDTO>(`${this._URL}/${id}`)

  }
  editNote(id:string, body:{}){
    return this.http.patch(`${this._URL}/${id}`, body)
  }

  delete(id:string){
    return this.http.delete(`${this._URL}/${id}`)
  }
}
