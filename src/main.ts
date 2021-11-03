import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
   const app = await NestFactory.create(AppModule);

   const config = new DocumentBuilder()
      .setTitle('REST-API with TypeORM and Relationships')
      .setDescription(
         'A REST-API that uses TypeORM with MySQL as a database engine. Tables are build up on relationships ie. one-one | one-many | many-one | many-many.'
      )
      .setVersion('1.0')
      .build();

   const document = SwaggerModule.createDocument(app, config);

   SwaggerModule.setup('/', app, document);

   await app.listen(3000);
   console.log('\n\n\n\n S E R V E R  IS LIVE ON PORT @3000 ');
   console.log('---------------------------------------------\n');
}
bootstrap();
