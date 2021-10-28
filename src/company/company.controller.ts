import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Company } from './interface/company.interface';

@Controller('company')
export class CompanyController {
   @Get()
   getCompanies() {
      return 'Get all companies.';
   }

   @Get(':id')
   getCompany(@Param('id') id) {
      return `Get Company by ID : @${id}`;
   }

   @Post()
   createCompany(@Body() company: Company) {
      return `Create company \nName : ${company.name}\nActive Employees : ${company.activeEmployees}`;
   }

   @Delete(':id')
   deleteCompany(@Param('id') id) {
      return `Delete a company by ID @${id}`;
   }
}
