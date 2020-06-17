/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

const globalPrefix = 'api';
const port = process.env.PORT || 3333;

const options = new DocumentBuilder()
  .setTitle('Vehikl Unified Office Manager API')
  .setDescription(
    'Middleware API to various VEHIKL OFfice Management Softwares'
  )
  .setVersion('1.0')
  .addServer('http://')
  .addTag('vehikl')
  .build();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(globalPrefix);

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
