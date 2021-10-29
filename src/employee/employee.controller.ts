import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Company } from 'src/company/entities/company.entity';
import { getConnection } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { I_Employee } from './interface/employee.interface';

const connection = getConnection('connection-1');
@Controller('employee')
export class EmployeeController {
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
