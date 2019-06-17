import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Task} from './task.entity';
import {DeleteResult, Repository, UpdateResult} from 'typeorm';

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>
    ) {}

    getAllTasks(): Promise<Task[]> {
       return this.taskRepository.find({})
    }

    getTaskById(id: number): Promise<Task> {
        return this.taskRepository.findOne(id);
    }

    createTask(newTask: Partial<Task>): Promise<Task> {
        const task = this.taskRepository.create(newTask);
        return this.taskRepository.save(task);
    }

    updateTaskById(id: number, updatedTask:Partial<Task>): Promise<UpdateResult> {
        return this.taskRepository.update(id, updatedTask);
    }

    deleteTaskById(id: number): Promise<DeleteResult> {
        return this.taskRepository.delete(id);
    }
}
