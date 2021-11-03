import { Injectable } from '@nestjs/common';
import { Task } from 'src/entities/task.entity';
import { getConnection } from 'typeorm';
// Creating branches

@Injectable()
export class TaskService {
   private readonly connection = getConnection('default');

   async getAll() {
      const tasks = await this.connection.manager.find(Task, {
         relations: ['employees'],
      });
      return tasks;
   }

   async getOne(id: any) {
      const task = await this.connection.manager.findByIds(Task, id, {
         relations: ['employees'],
      });
      return task;
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

   async deleteTask(id: any) {
      return this.connection.manager.delete(Task, { id });
   }
}
