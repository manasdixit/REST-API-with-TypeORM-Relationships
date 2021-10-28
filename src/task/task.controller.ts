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
   createTask(@Body() task: I_Task) {
      let newTask = new Task();

      newTask.name = task.name;
      newTask.taskId = task.taskId;
      newTask.assignedDate = task.assignedDate;
      newTask.deadline = task.deadline;
      newTask.isCompleted = task.isComplete;

      connection.manager.save(newTask);

      return `Created Task :  \nName : ${newTask.name}\nTask ID : ${newTask.taskId}`;
   }

   @Delete(':id')
   deleteTask(@Param('id') id) {
      return connection.manager.delete(Task, { taskId: id });
   }
}
