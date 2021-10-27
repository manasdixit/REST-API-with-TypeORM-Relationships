import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  companyId: number;

  @Column()
  name: string;

  @Column()
  activeEmployees: number;
}
