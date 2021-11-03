import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Company } from 'src/entities/company.entity';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';

@ApiTags('COMPANY')
@Controller('company')
export class CompanyController {
   constructor(private readonly companyService: CompanyService) {}

   @ApiOkResponse({ type: Company, isArray: true })
   @Get()
   getCompanies() {
      return this.companyService.findAll();
   }

   @ApiOkResponse({ type: Company })
   @Get(':id')
   getCompany(@Param('id') id: string) {
      return this.companyService.findOne(id);
   }

   @ApiCreatedResponse({ type: Company })
   @Post()
   async createCompany(@Body() company: CreateCompanyDto) {
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
