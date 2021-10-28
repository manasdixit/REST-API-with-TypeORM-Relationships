import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyController } from './company/company.controller';
import { EmployeeController } from './employee/employee.controller';
import { TaskController } from './task/task.controller';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController, CompanyController, EmployeeController, TaskController],
  providers: [AppService],
})
export class AppModule {}
