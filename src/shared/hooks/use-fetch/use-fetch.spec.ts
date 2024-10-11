import { describe, expect, it } from 'vitest';
import { useFetch } from './use-fetch';

interface ITodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

describe('useFetch', () => {
  it('should fetch data successfully', async () => {
    const { data, error, isLoading } = useFetch<ITodoItem>(
      'https://jsonplaceholder.typicode.com/todos/1',
    );

    expect(isLoading.value).toBe(true);
    expect(data.value).toBeNull();
    expect(error.value).toBe(false);

    await new Promise(resolve => setTimeout(resolve, 1000));

    expect(isLoading.value).toBe(false);
    expect(data.value).toEqual({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    });
    expect(error.value).toBe(false);
  });

  it('should handle fetch error', async () => {
    const { data, error, isLoading } = useFetch<ITodoItem>(
      'https://jsonplaceholder.typicode.com/example/1',
    );

    expect(isLoading.value).toBe(true);
    expect(data.value).toBeNull();
    expect(error.value).toBe(false);

    await new Promise(resolve => setTimeout(resolve, 1000));

    expect(isLoading.value).toBe(false);
    expect(data.value).toMatchObject({});
  });
});
