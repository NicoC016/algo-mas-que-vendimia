import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateNotesDTO } from 'src/DTO/notes/createNotes.dto';
import { UpdateNotesDTO } from 'src/DTO/notes/updateNotes.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  public async getAll(@Res() res) {
      const resp = await this.notesService.getAll()
      return res.status(HttpStatus.OK).json(resp);
  }

  @Get('/:id')
  public async getOne(@Res()res, @Param('id') noteId: string) {
    const resp = await this.notesService.getOne(noteId);
    return res.status(HttpStatus.OK).json(resp);
  }

  @Post()
  public async createOne(@Res() res, @Body() createNotesRequest: CreateNotesDTO) {
    const resp = await this.notesService.createOne(createNotesRequest)
    return res.status(HttpStatus.OK).json({
      HttpStatus:'OK',
      message: 'Note Successfully Created',
      resp
    });
  }

  @Put('/:id')
  public async updateOne(
    @Param('id') noteId: string,
    @Body() updateNotesRequest: UpdateNotesDTO,
    @Res() res
  ) {
    const resp = await this.notesService.updateOne(noteId, updateNotesRequest);
    return res.status(HttpStatus.OK).json(resp);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async deleteOne(@Param('id') noteId: string, @Res() res) {
   const noteDeleted =  await this.notesService.deleteOne(noteId);
    return res.status(HttpStatus.OK).json({
      message: 'Note Deleted Successfully',
      noteDeleted
  });
  }
}
