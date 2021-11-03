import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Task } from 'src/entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';

@ApiTags('TASK')
@Controller('task')
export class TaskController {
   constructor(private readonly taskService: TaskService) {}

   @ApiOkResponse({ type: Task, isArray: true })
   @Get()
   getTasks() {
      return this.taskService.getAll();
   }

   @ApiOkResponse({ type: Task })
   @Get(':id')
   getTask(@Param('id') id: string) {
      return this.taskService.getOne(id);
   }

   @ApiCreatedResponse({ type: Task })
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
