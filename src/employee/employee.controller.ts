import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Employee } from './interface/employee.interface';

@Controller('employee')
export class EmployeeController {
   @Get()
   getEmployees() {
      return 'Get all employees.';
   }

   @Get(':id')
   getEmployee(@Param('id') id) {
      return `Get an Employee by ID : @${id}`;
   }

   @Post()
   createEmployee(@Body() employee: Employee) {
      return `Create an Employee \nName : ${employee.name}\nEmployee ID : ${employee.employeeId}`;
   }

   @Delete(':id')
   deleteCompany(@Param('id') id) {
      return `Delete an Employee by ID @${id}`;
   }
}
