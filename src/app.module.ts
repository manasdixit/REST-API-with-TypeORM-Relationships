import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from 'ormconfig';
import { AppController } from './app.controller';
import { CompanyController } from './company/company.controller';
import { EmployeeController } from './employee/employee.controller';
import { TaskController } from './task/task.controller';
import { CompanyService } from './company/company.service';
import { EmployeeService } from './employee/employee.service';
import { TaskService } from './task/task.service';

@Module({
   imports: [TypeOrmModule.forRoot(typeOrmConfig)],
   controllers: [
      AppController,
      CompanyController,
      EmployeeController,
      TaskController,
   ],
   providers: [CompanyService, EmployeeService, TaskService],
})
export class AppModule {}
