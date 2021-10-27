import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  employeeId: number;

  @Column()
  name: string;

  @Column()
  dob: Date;

  @Column()
  sex: string;

  @Column()
  address: string;
}
