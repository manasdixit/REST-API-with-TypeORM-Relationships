import { Injectable } from '@nestjs/common';
import { Company } from 'src/entities/company.entity';
import { getConnection } from 'typeorm';

@Injectable()
export class CompanyService {
   private readonly connection = getConnection('default');

   findAll() {
      return this.connection.manager.find(Company, {
         relations: ['employees'],
      });
   }

   async findOne(id) {
      return await this.connection.manager.findByIds(Company, id, {
         relations: ['employees'],
      });
   }

   async createCompany(company) {
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

   async delete(id) {
      return this.connection.manager.delete(Company, id);
   }
}
