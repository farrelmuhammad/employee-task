import { Controller, Get } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {}
}
