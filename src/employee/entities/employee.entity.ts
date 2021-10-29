import { type } from 'os';
import { Company } from 'src/company/entities/company.entity';
import {
   Column,
   Entity,
   JoinColumn,
   ManyToMany,
   ManyToOne,
   OneToOne,
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
}
