import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Task} from './task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController]
})
export class TasksModule {}
