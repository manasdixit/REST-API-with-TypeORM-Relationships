import { Company } from 'src/company.entity';
import { Employee } from 'src/employee.entity';
import { Task } from 'src/task.entity';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const typeOrmConfig: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'manasdb',
  database: 'learn-nest',
  entities: [Employee, Company, Task],
  synchronize: true,
};

export default typeOrmConfig;
