import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { I_Employee } from '../interfaces/employee.interface';
import { EmployeeService } from './employee.service';
@Controller('employee')
export class EmployeeController {
   constructor(private readonly employeeService: EmployeeService) {}

   @Get()
   getEmployees() {
      return this.employeeService.getAll();
   }

   @Get(':id')
   getEmployee(@Param('id') id) {
      return this.employeeService.getOne(id);
   }

   @Post()
   createEmployee(@Body() employee: I_Employee) {
      if (this.employeeService.createEmployee(employee)) {
         return `Created employee \nName : ${employee.name}\nDOB : ${employee.dob}`;
      } else {
         return 'Something went wrong !! Cannot create new Employee';
      }
   }

   @Delete(':id')
   deleteCompany(@Param('id') id) {
      return this.employeeService.deleteEmployee(id);
   }
}
