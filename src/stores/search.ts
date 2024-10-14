import { defineStore } from 'pinia';

export const useSearchStore = defineStore('search', {
  state: () => ({
    search: '',
  }),
  actions: {
    setSearch(search: string) {
      this.search = search;
    },
  },
});
