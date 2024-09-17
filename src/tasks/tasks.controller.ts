import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.interface';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() task: Task) {
    return this.tasksService.create(task);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() task: Task) {
    return this.tasksService.update(id, task);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
