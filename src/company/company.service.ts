import { Injectable, NotFoundException } from '@nestjs/common';
import { Company } from 'src/entities/company.entity';
import { getConnection } from 'typeorm';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompanyService {
   private readonly connection = getConnection('default');

   // private readonly companyRepository = this.connection.getRepository(Company);

   async findAll() {
      const companies = await this.connection.manager.find(Company, {
         relations: ['employees'],
      });

      if (!companies) {
         throw new NotFoundException();
      }
      return companies;
   }

   async findOne(id: any) {
      const company = await this.connection.manager.findByIds(Company, id, {
         relations: ['employees'],
      });

      return company;
   }

   async createCompany(company: CreateCompanyDto) {
      const newCompany = await this.connection
         .createQueryBuilder()
         .insert()
         .into(Company)
         .values([
            {
               name: company.name,
               activeEmployees: company.activeEmployees,
            },
         ])
         .execute();

      return newCompany;
   }

   async delete(id: any) {
      return this.connection.manager.delete(Company, id);
   }
}
