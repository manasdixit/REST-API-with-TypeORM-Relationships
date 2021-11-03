import { ApiProperty } from '@nestjs/swagger';
import { Employee } from 'src/entities/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
   @ApiProperty()
   @PrimaryGeneratedColumn()
   id: number;

   @ApiProperty()
   @Column()
   name: string;

   @ApiProperty()
   @Column()
   activeEmployees: number;

   @OneToMany((type) => Employee, (employee) => employee.company)
   employees: Employee[];
}
