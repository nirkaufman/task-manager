import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Task} from './task.entity';
import {TasksService} from './tasks.service';
import {UpdateResult} from 'typeorm';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    allTasks(): Promise<Task[]> {
        return this.tasksService.getAllTasks();
    }

    @Get(':id')
    getTaskById(@Param('id') id: number): Promise<Task> {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    createNewTask(@Body() newTask: Partial<Task>): Promise<Task> {
        return this.tasksService.createTask(newTask);
    }

    @Put(':id')
    updateTaskById(@Param('id') id: number, @Body() updatedTask: Partial<Task>): Promise<UpdateResult>{
        return this.tasksService.updateTaskById(id, updatedTask);
    }

    @Delete(':id')
    deleteTaskById(@Param('id') id: number): any {
        return this.tasksService.deleteTaskById(id);
    }
}
