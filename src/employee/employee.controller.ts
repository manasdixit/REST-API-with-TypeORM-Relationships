import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { I_Employee } from './interface/employee.interface';

const connection = getConnection('connection-1');
@Controller('employee')
export class EmployeeController {
   @Get()
   async getEmployees() {
      return await connection.manager.find(Employee);
   }

   @Get(':id')
   async getEmployee(@Param('id') id) {
      return await connection.manager.findByIds(Employee, id);
   }

   @Post()
   async createEmployee(@Body() employee: I_Employee) {
      let newEmployee = new Employee();
      newEmployee.name = employee.name;
      newEmployee.employeeId = employee.employeeId;
      newEmployee.address = employee.address;
      newEmployee.dob = employee.dob;
      newEmployee.sex = employee.sex;

      await connection.manager.save(newEmployee);
      return `Created Employee: \nName : ${newEmployee.name}\nEmployee ID : ${newEmployee.employeeId}`;
   }

   @Delete(':id')
   async deleteCompany(@Param('id') id) {
      return await connection.manager.delete(Employee, { employeeId: id });
   }
}
