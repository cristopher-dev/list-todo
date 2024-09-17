import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { Task } from '../entity/task.entity';
import { Repository } from 'typeorm';

describe('TasksService', () => {
  let service: TasksService;
  let repo: Repository<Task>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: getRepositoryToken(Task),
          useValue: {
            save: jest.fn(),
            find: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<TasksService>(TasksService);
    repo = module.get<Repository<Task>>(getRepositoryToken(Task));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a task', async () => {
      const task = {
        title: 'Test task',
        description: 'Test description',
        status: 'in-progress' as 'pending' | 'in-progress' | 'completed',
      };
      const savedTask = { id: 1, ...task };
      jest.spyOn(repo, 'save').mockResolvedValue(savedTask);
      expect(await service.create(task)).toEqual(savedTask);
    });
  });

  describe('findAll', () => {
    it('should return an array of tasks', async () => {
      const tasks = [
        {
          id: 1,
          title: 'Test task',
          description: 'Test description',
          status: 'in-progress' as 'pending' | 'in-progress' | 'completed',
        },
      ];
      jest.spyOn(repo, 'find').mockResolvedValue(tasks);
      expect(await service.findAll()).toEqual(tasks);
    });
  });

  describe('update', () => {
    it('should update a task', async () => {
      const id = 1;
      const task = {
        id: 1,
        title: 'Test task',
        description: 'Test description',
        status: 'in-progress' as 'pending' | 'in-progress' | 'completed',
      };
      const updatedTask = { id, ...task };
      jest.spyOn(repo, 'update').mockResolvedValue(undefined);
      jest.spyOn(repo, 'findOne').mockResolvedValue(updatedTask);
      expect(await service.update(id, task)).toEqual(updatedTask);
    });
  });

  describe('remove', () => {
    it('should remove a task', async () => {
      const id = 1;
      jest.spyOn(repo, 'delete').mockResolvedValue(undefined);
      expect(await service.remove(id)).toEqual({
        message: 'Task removed successfully',
      });
    });
  });
});
