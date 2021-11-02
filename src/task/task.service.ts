import { Injectable } from '@nestjs/common';
import { Task } from 'src/entities/task.entity';
import { getConnection } from 'typeorm';

@Injectable()
export class TaskService {
   private readonly connection = getConnection('default');

   async getAll() {
      return await this.connection.manager.find(Task, {
         relations: ['employees'],
      });
   }

   async getOne(id) {
      return await this.connection.manager.findByIds(Task, id);
   }

   async createTask(body) {
      return await this.connection
         .createQueryBuilder()
         .insert()
         .into(Task)
         .values([
            {
               name: body.name,
               assignedDate: body.assignedDate,
               deadline: body.deadline,
               isComplete: body.isComplete,
               employees: body.employees,
            },
         ])
         .execute();
   }

   async deleteTask(id) {
      return this.connection.manager.delete(Task, { id });
   }
}
