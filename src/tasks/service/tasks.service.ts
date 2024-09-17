import { Injectable } from '@nestjs/common';
import { Task } from '../interface/task.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task as Tasks } from '../entity/task.entity';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks)
    private tasksRepository: Repository<Task>,
  ) {}

  async create(task: Task) {
    return await this.tasksRepository.save(task);
  }

  async findAll() {
    return await this.tasksRepository.find();
  }

  async update(id: any, task: Task) {
    await this.tasksRepository.update(id, task);
    return await this.tasksRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    await this.tasksRepository.delete(id);
    return { message: 'Task removed successfully' };
  }
}
