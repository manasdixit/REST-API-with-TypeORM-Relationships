import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
   @PrimaryGeneratedColumn()
   taskId: number;

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
