import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Task } from './interface/task.interface';

@Controller('task')
export class TaskController {
   @Get()
   getTasks() {
      return 'Get all tasks.';
   }

   @Get(':id')
   getTask(@Param('id') id) {
      return `Get a Task by ID : @${id}`;
   }

   @Post()
   createTask(@Body() task: Task) {
      return `Create a Task \nName : ${task.name}\nActive Employees : ${task.taskId}`;
   }

   @Delete(':id')
   deleteTask(@Param('id') id) {
      return `Delete a Task by ID @${id}`;
   }
}
