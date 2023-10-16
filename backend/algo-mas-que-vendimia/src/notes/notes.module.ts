import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Notes } from 'src/entity/notes.entity';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';

@Module({
  controllers: [NotesController],
  providers: [NotesService],
  imports:[TypeOrmModule.forFeature([Notes])]
})
export class NotesModule {}
