import { ApiProperty } from '@nestjs/swagger';
import { Employee } from 'src/entities/employee.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
   @ApiProperty()
   @PrimaryGeneratedColumn()
   id: number;

   @ApiProperty()
   @Column()
   name: string;

   @ApiProperty()
   @Column()
   deadline: Date;

   @ApiProperty()
   @Column()
   assignedDate: Date;

   @ApiProperty()
   @Column({
      default: false,
   })
   isComplete: Boolean;

   @ManyToOne((type) => Employee, (employee) => employee.tasks)
   employees: Employee[];
}
