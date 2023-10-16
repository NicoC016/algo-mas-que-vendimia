import { Type } from 'class-transformer';
import {
    IsDate,
    IsOptional,
    IsString,
    MinLength,
  } from 'class-validator';

export class NotesDTO{
    @IsString()
    id:string;

    @IsString()
    @MinLength(1)
    title:string;

    @IsString()
    subtitle:string

    @IsString()
    body:string

    @IsString()
    @IsOptional()
    item:string

    @IsString()
    brandLabel:string

    @IsDate()
    @Type(() => Date)
    date:Date

    @IsOptional()
    image:string

    @IsOptional()
    isImportant:boolean

    @IsOptional()
    isVeryImportant:boolean
}