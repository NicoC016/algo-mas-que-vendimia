import {Column, Entity,  PrimaryColumn} from "typeorm"
import { v4 as uuid } from "uuid";

export enum statusTask{
    created = 0,
    inProgress = 1,
    Done = 2
}

@Entity("Notes")
export class Notes{
    @PrimaryColumn()
    id: string;

    @Column({nullable:false})
    title:string

    @Column({nullable:false})
    subtitle :string

    @Column({nullable:false})
    body:string

    @Column({nullable:true})
    image:string

    @Column({nullable:true})
    item:string

    @Column({nullable:true})
    date:Date

    @Column({nullable:false})
    brandLabel:string

    @Column({nullable:false})
    isImportant:boolean

    @Column({nullable:false})
    isVeryImportant:boolean

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
