import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   name: string;

   @Column()
   deadline: Date;

   @Column()
   assignedDate: Date;

   @Column({
      default: false,
   })
   isCompleted: Boolean;
}
