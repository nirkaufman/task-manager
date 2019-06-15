import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Task} from './task.entity';

@Controller('tasks')
export class TasksController {

    @Get()
    allTasks(): Task[] {
        return [];
    }

    @Get(':id')
    getTaskById(@Param('id') id: number): Task {
        return <Task>{id};
    }

    @Post()
    createNewTask(@Body() newTask: Partial<Task>): any{
        return "new task created successful";
    }

    @Put(':id')
    updateTaskById(@Param('id') id: number): any {
        return `task # ${id} updated`;
    }

    @Delete(':id')
    deleteTaskById(@Param('id') id: number): any {
        return `task # ${id} deleted`;
    }
}
