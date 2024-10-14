<script setup lang="ts">
import SearchIcon from '@/icons/SearchIcon.vue';
</script>

<template>
  <div
    class="flex w-full max-w-sm items-center rounded-md bg-gray-100 pl-3 pr-4 text-gray-600"
  >
    <input
      class="w-full bg-transparent py-2 text-gray-800 placeholder:font-medium placeholder:text-gray-500 focus:outline-none"
      type="search"
      placeholder="Search for users..."
    />

    <SearchIcon width="16" height="16" class="flex-shrink-0" />
  </div>
</template>
