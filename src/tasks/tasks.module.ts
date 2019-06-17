import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Task} from './task.entity';
import { TasksService } from './tasks.service';


@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
