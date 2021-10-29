import { Employee } from 'src/employee/entities/employee.entity';
import {
   Column,
   Entity,
   OneToMany,
   OneToOne,
   PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Company {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   name: string;

   @Column()
   activeEmployees: number;

   @OneToMany((type) => Employee, (employee) => employee.company)
   employees: Employee[];

   // @OneToMany((type) => Employee, (employee) => employee.id)
   // employees: Employee[];
}
