import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TasksModule } from './tasks/tasks.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [AppController],
  imports: [TasksModule, TypeOrmModule.forRoot(), UsersModule],
})
export class AppModule {}
