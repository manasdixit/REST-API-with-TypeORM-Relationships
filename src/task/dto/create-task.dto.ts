import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
   @ApiProperty()
   id: number;

   @ApiProperty()
   name: string;

   @ApiProperty()
   deadline: Date;

   @ApiProperty()
   assignedDate: Date;

   @ApiProperty()
   isComplete: boolean;
}
