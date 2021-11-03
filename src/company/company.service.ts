import { Injectable } from '@nestjs/common';
import { Company } from 'src/entities/company.entity';
import { getConnection, getRepository } from 'typeorm';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompanyService {
   private readonly connection = getConnection('default');

   // private readonly companyRepository = this.connection.getRepository(Company);

   async findAll() {
      return await this.connection.manager.find(Company, {
         relations: ['employees'],
      });
   }

   async findOne(id: any) {
      return await this.connection.manager.findByIds(Company, id, {
         relations: ['employees'],
      });
   }

   async createCompany(company: CreateCompanyDto) {
      return this.connection
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
   }

   async delete(id: any) {
      return this.connection.manager.delete(Company, id);
   }
}
