import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Company } from 'src/entities/company.entity';
import { Employee } from 'src/entities/employee.entity';
import { getConnection } from 'typeorm';

import { I_Employee } from '../interfaces/employee.interface';
import { EmployeeService } from './employee.service';
const connection = getConnection('default');
@Controller('employee')
export class EmployeeController {
   constructor(private readonly employeeService: EmployeeService) {}

   @Get()
   async getEmployees() {
      return await connection.manager.find(Employee, { relations: ['tasks'] });
   }

   @Get(':id')
   async getEmployee(@Param('id') id) {
      return await connection.manager.findByIds(Employee, id);
   }

   @Post()
   async createEmployee(@Body() employee: I_Employee) {
      await connection
         .createQueryBuilder()
         .insert()
         .into(Employee)
         .values([
            {
               name: employee.name,
               address: employee.address,
               dob: employee.dob,
               sex: employee.sex,
            },
         ])
         .execute();

      return `Created employee \nName : ${employee.name}\nDOB : ${employee.dob}`;
   }

   @Delete(':id')
   async deleteCompany(@Param('id') id) {
      return await connection.manager.delete(Employee, { id });
   }
}
