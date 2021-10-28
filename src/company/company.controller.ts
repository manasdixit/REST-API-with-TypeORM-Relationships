import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { Company } from './entities/company.entity';
import { I_Company } from './interface/company.interface';

@Controller('company')
export class CompanyController {
   @Get()
   getCompanies() {
      return getConnection('connection-1').manager.find(Company);
   }

   @Get(':id')
   getCompany(@Param('id') id) {
      return getConnection('connection-1').manager.findByIds(Company, id);
   }

   @Post()
   async createCompany(@Body() company: I_Company) {
      const connection = getConnection('connection-1');

      let newCompany = new Company();

      newCompany.activeEmployees = company.activeEmployees;
      newCompany.name = company.name;

      await connection.manager.save(newCompany);
      console.log('New company has been created !!');

      return `Created company \nName : ${company.name}\nActive Employees : ${company.activeEmployees}`;
   }

   @Delete(':id')
   deleteCompany(@Param('id') id) {
      return getConnection('connection-1').manager.delete(Company, {
         companyId: id,
      });
   }
}
