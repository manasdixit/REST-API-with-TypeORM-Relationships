import { ApiProperty } from '@nestjs/swagger';
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
   @ApiProperty()
   @PrimaryGeneratedColumn()
   id: number;

   @ApiProperty()
   @Column()
   name: string;

   @ApiProperty()
   @Column()
   dob: Date;

   @ApiProperty()
   @Column()
   sex: string;

   @ApiProperty()
   @Column()
   address: string;

   @ManyToOne((type) => Company, (company) => company.employees)
   company: Company;

   @OneToMany((type) => Task, (task) => task.employees)
   tasks: Task[];
}
