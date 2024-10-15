import type { User } from '@/types/user';

export const getUserById = async (id: string): Promise<User> => {
  const user = await fetch(`http://localhost:3000/users/${id}`);
  return user.json();
};
