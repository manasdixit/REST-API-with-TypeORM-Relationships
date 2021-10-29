import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { Task } from './entities/task.entity';
import { I_Task } from './interface/task.interface';

const connection = getConnection('connection-1');
@Controller('task')
export class TaskController {
   @Get()
   getTasks() {
      return connection.manager.find(Task, { relations: ['employees'] });
   }

   @Get(':id')
   getTask(@Param('id') id) {
      return connection.manager.findByIds(Task, id);
   }

   @Post()
   async createTask(@Body() task: I_Task) {
      await connection
         .createQueryBuilder()
         .insert()
         .into(Task)
         .values([
            {
               name: task.name,
               assignedDate: task.assignedDate,
               deadline: task.deadline,
               isComplete: task.isComplete,
            },
         ])
         .execute();
      return `Task created.. \nName : ${task.name}\nDeadline : ${task.deadline}`;
   }

   @Delete(':id')
   deleteTask(@Param('id') id) {
      return connection.manager.delete(Task, { id });
   }
}
