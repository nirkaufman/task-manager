import {Controller, Get} from '@nestjs/common';

@Controller('tasks')
export class TasksController {

    @Get()
    ping(): string {
        return "Tasks controller alive!"
    }
}
