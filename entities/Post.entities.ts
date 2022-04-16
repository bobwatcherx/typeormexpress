import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Tblpost {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nama: string

    @Column()
    umur: number


}
