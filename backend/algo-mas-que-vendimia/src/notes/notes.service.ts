import { Injectable, NotFoundException, Options, Param } from '@nestjs/common';
import { NotesDTO } from 'src/DTO/notes/notes.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Notes } from 'src/entity/notes.entity';
import { CreateNotesDTO } from 'src/DTO/notes/createNotes.dto';
import { UpdateNotesDTO } from 'src/DTO/notes/updateNotes.dto';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Notes) private notesRepository: Repository<Notes>,
  ) {}

  public async createOne(createNotesRequest: CreateNotesDTO) {
    const note = new Notes();
    note.title = createNotesRequest.title;
    note.subtitle = createNotesRequest.subtitle;
    note.body = createNotesRequest.body;
    note.item = createNotesRequest.item;
    note.date = createNotesRequest.date;
    note.image = createNotesRequest.image;
    note.brandLabel = createNotesRequest.brandLabel
    note.isImportant = createNotesRequest.isImportant;
    note.isVeryImportant = createNotesRequest.isVeryImportant;
    console.log(note)
    await this.notesRepository.save(note);

    const notesDTO = this.entityToDTO(note);

    return notesDTO;
  }

  public async getOne(noteId) {
    const note: Notes = await this.notesRepository.findOne({
      where: {
        id: noteId,
      },
    });
    if (!note) {
      throw new NotFoundException(` La nota con el id ${noteId} no existe`);
    }

    const noteDTO: NotesDTO = this.entityToDTO(note);
    return noteDTO;
  }

  private entityToDTO(notes: Notes): NotesDTO {
    const note = new NotesDTO();
    note.id = notes.id;
    note.title = notes.title;
    note.subtitle = notes.subtitle;
    note.body = notes.body;
    note.item = notes.item;
    note.date = notes.date;
    note.brandLabel = notes.brandLabel
    note.image = notes.image;
    note.isImportant = notes.isImportant;
    note.isVeryImportant = notes.isVeryImportant;

    return note;
  }

  public async getAll() {
    const notes: Notes[] = await this.notesRepository.find();

    const notesDTO: NotesDTO[] = notes.map((x) => this.entityToDTO(x));

    return notesDTO;
  }

  public async updateOne(noteId: string, updateNotesRequest: UpdateNotesDTO) {
    //buscamos la tarea por id

    const note: Notes = await this.getOne(noteId);

    // seteamos la tarea para poder editarla
    note.title = updateNotesRequest.title;
    note.subtitle = updateNotesRequest.subtitle;
    note.body = updateNotesRequest.body;
    note.item = updateNotesRequest.item;
    note.date = updateNotesRequest.date;
    note.brandLabel = updateNotesRequest.brandLabel
    note.image = updateNotesRequest.image;
    note.isImportant = updateNotesRequest.isImportant;
    note.isVeryImportant = updateNotesRequest.isVeryImportant;

    //actualizamos y guardamos la tarea
    await this.notesRepository.save(note);

    //Retornamos la tarea formato dto
    const noteDTO: NotesDTO = await this.entityToDTO(note);

    return noteDTO;
  }

  public async deleteOne(noteId: string) {
    //buscamos la tarea por id
    const note: Notes = await this.getOne(noteId);

    //eliminamos la tarea por
    await this.notesRepository.remove(note);
  }
}
