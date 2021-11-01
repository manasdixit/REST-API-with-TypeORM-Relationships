import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { Company } from './entities/company.entity';
import { I_Company } from './interface/company.interface';

@Controller('company')
export class CompanyController {
   @Get()
   getCompanies() {
      return getConnection('default').manager.find(Company, {
         relations: ['employees'],
      });
   }

   @Get(':id')
   getCompany(@Param('id') id) {
      return getConnection('default').manager.findByIds(Company, id);
   }

   @Post()
   async createCompany(@Body() company: I_Company) {
      const connection = getConnection('default');

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
      return getConnection('default').manager.delete(Company, { id });
   }
}
