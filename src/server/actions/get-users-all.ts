import type { User } from '@/types/user';

export const getUsersAll = async (): Promise<User[]> => {
  const data = await fetch('http://localhost:3000/users');
  return data.json();
};
