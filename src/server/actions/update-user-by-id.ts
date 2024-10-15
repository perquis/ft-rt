import type { User } from '@/types/user';

export const updateUserById = async (id: string, data: Partial<User>) => {
  fetch(`http://localhost:3000/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
