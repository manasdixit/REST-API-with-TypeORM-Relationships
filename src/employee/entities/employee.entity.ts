import { Company } from 'src/company/entities/company.entity';
import { Task } from 'src/task/entities/task.entity';
import {
   Column,
   Entity,
   JoinColumn,
   ManyToOne,
   OneToMany,
   PrimaryColumn,
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
