import { Type } from 'class-transformer';
import {
    IsDate,
    IsOptional,
    IsString,
    MinLength,
  } from 'class-validator'
export class CreateNotesDTO {

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

    @IsDate()
    @Type(() => Date)
    date:Date

    @IsString()
    brandLabel:string

    @IsOptional()
    image:string

    @IsOptional()
    isImportant:boolean

    @IsOptional()
    isVeryImportant:boolean
}
