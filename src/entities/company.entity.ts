import { Employee } from 'src/entities/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
}
