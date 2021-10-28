import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
   const app = await NestFactory.create(AppModule);
   await app.listen(3000);
   console.log('\n\n\n\n S E R V E R  IS LIVE ON PORT @3000 ');
   console.log('---------------------------------------------\n');
}
bootstrap();
