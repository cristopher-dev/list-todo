import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  ValidationPipe,
  UsePipes,
  UseGuards,
  NotFoundException,
  BadRequestException,
  UseFilters,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TasksService } from './service/tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { HttpExceptionFilter } from './http-exception.filter';

@Controller('tasks')
@UseFilters(HttpExceptionFilter)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  async create(@Body() createTaskDto: CreateTaskDto) {
    try {
      return await this.tasksService.create(createTaskDto);
    } catch (error) {
      throw new BadRequestException('Failed to create task');
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.tasksService.findAll();
    } catch (error) {
      throw new NotFoundException('No tasks found');
    }
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createTaskDto: CreateTaskDto,
  ) {
    try {
      return await this.tasksService.update(id, createTaskDto);
    } catch (error) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.tasksService.remove(id);
    } catch (error) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }
}
