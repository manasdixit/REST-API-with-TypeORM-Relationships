import { Injectable } from '@nestjs/common';
import { Task } from 'src/entities/task.entity';
import { getConnection } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
// Creating branches

@Injectable()
export class TaskService {
   private readonly connection = getConnection('default');

   async getAll() {
      try {
         return await this.connection.manager.find(Task, {
            relations: ['employees'],
         });
      } catch (error) {
         throw new Error(error);
      }
   }

   async getOne(id: any) {
      try {
         return await this.connection.manager.findByIds(Task, id, {
            relations: ['employees'],
         });
      } catch (error) {
         throw new Error(error);
      }
   }

   async createTask(body) {
      try {
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
      } catch (error) {
         throw new Error(error);
      }
   }

   async deleteTask(id: any) {
      try {
         return this.connection.manager.delete(Task, { id });
      } catch (error) {
         throw new Error(error);
      }
   }
}
