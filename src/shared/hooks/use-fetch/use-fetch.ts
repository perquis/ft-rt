import { ref } from 'vue';

export function useFetch<T>(url: string) {
  const data = ref<T | null>(null);
  const isLoading = ref(true);
  const error = ref(null);

  fetch(url)
    .then(res => res.json() as T)
    .then(json => (data.value = json))
    .catch(err => (error.value = err))
    .finally(() => (isLoading.value = false));

  return {
    data,
    error,
    isLoading,
  };
}
