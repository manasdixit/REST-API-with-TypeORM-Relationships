import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Employee } from 'src/entities/employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeService } from './employee.service';

@ApiTags('EMPLOYEE')
@Controller('employee')
export class EmployeeController {
   constructor(private readonly employeeService: EmployeeService) {}

   @ApiOkResponse({ type: Employee, isArray: true })
   @Get()
   getEmployees() {
      return this.employeeService.getAll();
   }

   @ApiOkResponse({ type: Employee })
   @Get(':id')
   getEmployee(@Param('id') id: string) {
      return this.employeeService.getOne(id);
   }

   @ApiCreatedResponse({ type: Employee })
   @Post()
   createEmployee(@Body() employee: CreateEmployeeDto) {
      if (this.employeeService.createEmployee(employee)) {
         return `Created employee \nName : ${employee.name}\nDOB : ${employee.dob}`;
      } else {
         return 'Something went wrong !! Cannot create new Employee';
      }
   }

   @Delete(':id')
   deleteCompany(@Param('id') id: string) {
      return this.employeeService.deleteEmployee(id);
   }
}
