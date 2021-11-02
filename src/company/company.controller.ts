import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { I_Company } from '../interfaces/company.interface';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
   constructor(private readonly companyService: CompanyService) {}
   @Get()
   async getCompanies() {
      return await this.companyService.findAll();
   }

   @Get(':id')
   getCompany(@Param('id') id) {
      return this.companyService.findOne(id);
   }

   @Post()
   async createCompany(@Body() company: I_Company) {
      if (await this.companyService.createCompany(company)) {
         return `Created company \nName : ${company.name}\nActive Employees : ${company.activeEmployees}`;
      } else {
         return 'Something went wrong !! Company faied to be created...';
      }
   }

   @Delete(':id')
   deleteCompany(@Param('id') id) {
      return this.companyService.delete(id);
   }
}
