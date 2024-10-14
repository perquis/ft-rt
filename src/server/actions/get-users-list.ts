import type { User } from '@/types/user';

export interface IGetUsersListResponse {
  data: User[];
  first: number;
  last: number;
  items: number;
  next: number | null;
  pages: number;
  prev: number | null;
}

export const getUsersList = async (
  page = 1,
  limit = 8,
): Promise<IGetUsersListResponse> => {
  const data = await fetch(
    `http://localhost:3000/users?_page=${page}&_per_page=${limit}`,
  );

  return data.json();
};
