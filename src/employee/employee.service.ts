import { Injectable } from '@nestjs/common';
import { Employee } from 'src/entities/employee.entity';
import { getConnection } from 'typeorm';

@Injectable()
export class EmployeeService {
   private readonly connection = getConnection('default');

   async getAll() {
      const employees = await this.connection.manager.find(Employee, {
         relations: ['tasks'],
      });
      return employees;
   }

   async getOne(id: any) {
      const employee = await this.connection.manager.findByIds(Employee, id, {
         relations: ['tasks'],
      });
      return employee;
   }

   async createEmployee(body) {
      return await this.connection
         .createQueryBuilder()
         .insert()
         .into(Employee)
         .values([
            {
               name: body.name,
               address: body.address,
               dob: body.dob,
               sex: body.sex,
               company: body.company,
            },
         ])
         .execute();
   }

   async deleteEmployee(id: any) {
      return await this.connection.manager.delete(Employee, id);
   }
}
