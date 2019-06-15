import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TasksModule } from './tasks/tasks.module';

@Module({
  controllers: [AppController],
  imports: [TasksModule],
})
export class AppModule {}
