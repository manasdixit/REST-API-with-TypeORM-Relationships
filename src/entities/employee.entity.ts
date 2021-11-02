import { Company } from 'src/entities/company.entity';
import { Task } from 'src/entities/task.entity';
import {
   Column,
   Entity,
   ManyToOne,
   OneToMany,
   PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Employee {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   name: string;

   @Column()
   dob: Date;

   @Column()
   sex: string;

   @Column()
   address: string;

   @ManyToOne((type) => Company, (company) => company.employees)
   company: Company;

   @OneToMany((type) => Task, (task) => task.employees)
   tasks: Task[];
}
