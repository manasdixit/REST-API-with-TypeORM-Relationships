import { Company } from 'src/entities/company.entity';
import { Employee } from 'src/entities/employee.entity';
import { Task } from 'src/entities/task.entity';
import { createConnection } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const typeOrmConfig: MysqlConnectionOptions = {
   type: 'mysql',
   host: 'localhost',
   port: 3306,
   username: 'root',
   password: 'manasdb123',
   database: 'db',
   entities: [Employee, Company, Task],
   synchronize: true,
};

createConnection(typeOrmConfig).then(async (connection) => {
   console.log('MySQL Database conneted...');
});

export default typeOrmConfig;
