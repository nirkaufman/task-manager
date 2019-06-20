import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {LogInterceptor} from './log.interceptor';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new LogInterceptor());

  const options = new DocumentBuilder()
      .setTitle('Tasks Manager App')
      .setDescription('The Task manager API description')
      .setVersion('1.0')
      .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
