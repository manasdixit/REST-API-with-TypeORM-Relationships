import { Company } from 'src/company/entities/company.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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
