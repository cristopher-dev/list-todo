import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './service/tasks.service';

describe('TasksController', () => {
  let controller: TasksController;
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        {
          provide: TasksService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<TasksController>(TasksController);
    service = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a task', async () => {
      const task = {
        id: 1,
        title: 'Test task',
        description: 'Test description',
        status: 'in-progress' as 'pending' | 'in-progress' | 'completed',
      };
      const savedTask = { id: 1, ...task };
      jest.spyOn(service, 'create').mockResolvedValue(savedTask);
      expect(await controller.create(task)).toEqual(savedTask);
    });
  });

  describe('findAll', () => {
    it('should return an array of tasks', async () => {
      const tasks = [
        { id: 1, title: 'Test task', description: 'Test description' },
      ];
      jest.spyOn(service, 'findAll').mockResolvedValue(tasks);
      expect(await controller.findAll()).toEqual(tasks);
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
      jest.spyOn(service, 'update').mockResolvedValue(updatedTask);
      expect(await controller.update(id, task)).toEqual(updatedTask);
    });
  });

  describe('remove', () => {
    it('should remove a task', async () => {
      const id = 1;
      jest
        .spyOn(service, 'remove')
        .mockResolvedValue({ message: 'Task removed successfully' });
      expect(await controller.remove(id)).toEqual({
        message: 'Task removed successfully',
      });
    });
  });
});
