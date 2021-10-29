import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { Company } from './entities/company.entity';
import { I_Company } from './interface/company.interface';

@Controller('company')
export class CompanyController {
   @Get()
   getCompanies() {
      return getConnection('connection-1').manager.find(Company, {
         relations: ['employees'],
      });
   }

   @Get(':id')
   getCompany(@Param('id') id) {
      return getConnection('connection-1').manager.findByIds(Company, id);
   }

   @Post()
   async createCompany(@Body() company: I_Company) {
      const connection = getConnection('connection-1');

      await connection
         .createQueryBuilder()
         .insert()
         .into(Company)
         .values([
            { name: company.name, activeEmployees: company.activeEmployees },
         ])
         .execute();

      return `Created company \nName : ${company.name}\nActive Employees : ${company.activeEmployees}`;
   }

   @Delete(':id')
   deleteCompany(@Param('id') id) {
      return getConnection('connection-1').manager.delete(Company, { id });
   }
}
