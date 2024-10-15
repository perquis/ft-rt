<script setup lang="ts">
import IconSearch from '@/icons/IconSearch.vue';
import { useSearchStore } from '@/stores/search';
import { ref, watch } from 'vue';

const store = useSearchStore();

const keyword = ref('');

watch(
  () => keyword.value,
  newKeyword => {
    store.setSearch(newKeyword);
  },
);
</script>

<template>
  <div
    class="flex w-full items-center rounded-md bg-gray-100 pl-3 pr-4 text-gray-600 sm:max-w-sm"
  >
    <input
      class="w-full bg-transparent py-2 text-gray-800 placeholder:font-medium placeholder:text-gray-500 focus:outline-none"
      type="search"
      v-model="keyword"
      placeholder="Search for users..."
    />

    <IconSearch width="16" height="16" class="flex-shrink-0" />
  </div>
</template>
