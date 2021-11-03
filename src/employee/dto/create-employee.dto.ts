import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
   @ApiProperty()
   id: number;

   @ApiProperty()
   name: string;

   @ApiProperty()
   dob: Date;

   @ApiProperty()
   sex: string;

   @ApiProperty()
   address: string;
}
