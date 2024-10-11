import { ref } from 'vue';

export function useFetch<T>(url: string) {
  const data = ref<T | null>(null);
  const isLoading = ref(true);
  const error = ref<boolean>(false);

  (async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      data.value = json;
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      }

      error.value = true;
    } finally {
      isLoading.value = false;
    }
  })();

  return {
    data,
    error,
    isLoading,
  };
}
