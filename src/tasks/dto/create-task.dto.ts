import { IsNotEmpty, IsIn } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  description: string;

  @IsIn(['pending', 'in-progress', 'completed'], { message: 'Invalid status' })
  status: 'pending' | 'in-progress' | 'completed';
}
