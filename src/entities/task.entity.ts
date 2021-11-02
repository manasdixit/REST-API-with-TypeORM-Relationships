import { Employee } from 'src/entities/employee.entity';
import {
   Column,
   Entity,
   ManyToMany,
   ManyToOne,
   PrimaryGeneratedColumn,
} from 'typeorm';

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
   isComplete: Boolean;

   @ManyToOne((type) => Employee, (employee) => employee.tasks)
   employees: Employee[];
}
