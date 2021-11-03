import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyDto {
   @ApiProperty()
   id: number;

   @ApiProperty()
   name: string;

   @ApiProperty()
   activeEmployees: number;
}
