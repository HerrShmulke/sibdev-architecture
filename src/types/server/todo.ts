import { CreatedAt } from './created-at';

export type Todo = {
  id: number;
  label: string;
  is_passed: boolean;
  created_at: CreatedAt
};