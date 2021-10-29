import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { Task } from './entities/task.entity';
import { I_Task } from './interface/task.interface';

const connection = getConnection('connection-1');
@Controller('task')
export class TaskController {
   @Get()
   getTasks() {
      return connection.manager.find(Task);
   }

   @Get(':id')
   getTask(@Param('id') id) {
      return connection.manager.findByIds(Task, id);
   }

   @Post()
   async createTask(@Body() task: I_Task) {
      let newTask = new Task();

      newTask.name = task.name;
      newTask.assignedDate = task.assignedDate;
      newTask.deadline = task.deadline;
      newTask.isCompleted = task.isComplete;

      return await connection.manager.save(newTask);
   }

   @Delete(':id')
   deleteTask(@Param('id') id) {
      return connection.manager.delete(Task, { id });
   }
}
