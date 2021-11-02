import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { Task } from '../entities/task.entity';
import { I_Task } from '../interfaces/task.interface';
import { TaskService } from './task.service';

const connection = getConnection('default');
@Controller('task')
export class TaskController {
   constructor(private readonly taskService: TaskService) {}

   @Get()
   getTasks() {
      return this.taskService.getAll();
   }

   @Get(':id')
   getTask(@Param('id') id) {
      return this.taskService.getOne(id);
   }

   @Post()
   async createTask(@Body() task: I_Task) {
      if (this.taskService.createTask(task)) {
         return `Task created.. \nName : ${task.name}\nDeadline : ${task.deadline}`;
      } else {
         return 'Something went wrong !! Unable to create new task...';
      }
   }

   @Delete(':id')
   deleteTask(@Param('id') id) {
      return this.taskService.deleteTask(id);
   }
}
