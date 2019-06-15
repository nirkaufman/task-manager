import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TasksModule } from './tasks/tasks.module';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  controllers: [AppController],
  imports: [TasksModule, TypeOrmModule.forRoot()],
})
export class AppModule {}
