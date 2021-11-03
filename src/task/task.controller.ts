import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';

@ApiTags('TASK')
@Controller('task')
export class TaskController {
   constructor(private readonly taskService: TaskService) {}

   @Get()
   getTasks() {
      return this.taskService.getAll();
   }

   @Get(':id')
   getTask(@Param('id') id: string) {
      return this.taskService.getOne(id);
   }

   @Post()
   async createTask(@Body() task: CreateTaskDto) {
      if (this.taskService.createTask(task)) {
         return `Task created.. \nName : ${task.name}\nDeadline : ${task.deadline}`;
      } else {
         return 'Something went wrong !! Unable to create new task...';
      }
   }

   @Delete(':id')
   deleteTask(@Param('id') id: string) {
      return this.taskService.deleteTask(id);
   }
}
