import { Company } from 'src/company/entities/company.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { Task } from 'src/task/entities/task.entity';
import { createConnection } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const typeOrmConfig: MysqlConnectionOptions = {
   type: 'mysql',
   host: 'localhost',
   port: 3306,
   username: 'root',
   password: 'manasdb',
   database: 'db',
   entities: [Employee, Company, Task],
   synchronize: true,
};

createConnection(typeOrmConfig).then(async (connection) => {
   console.log('MySQL Database conneted...');
});

export default typeOrmConfig;
