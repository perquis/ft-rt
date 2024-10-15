import type { Intern } from '@/interfaces/intern';

export interface IPagination {
  data: Intern[];
  first: number;
  last: number;
  items: number;
  next: number | null;
  pages: number;
  prev: number | null;
}
