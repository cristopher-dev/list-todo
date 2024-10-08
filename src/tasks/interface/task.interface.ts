export interface Task {
  id?: string | number;
  title?: string;
  description?: string;
  status?: 'pending' | 'in-progress' | 'completed';
}
