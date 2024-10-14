<script setup lang="ts">
import IconEdit from '@/icons/IconEdit.vue';
import IconTrash from '@/icons/IconTrash.vue';
import type { User } from '@/types/user';

defineProps<User>();
</script>

<template>
  <div
    :class="[
      'flex items-center rounded-md py-2 pl-4 pr-16',
      $props.index! % 2 === 0 ? 'bg-gray-100' : '',
    ]"
  >
    <div class="w-full max-w-28 flex-1 flex-shrink-0">
      <img
        class="h-10 w-10 overflow-hidden rounded-full object-cover"
        :src="$props.avatar"
        :alt="$props.fullname"
      />
    </div>
    <div class="w-full flex-1 font-medium capitalize text-gray-700">
      {{ $props.fullname }}
    </div>
    <div
      class="flex w-full max-w-16 flex-1 gap-3 font-bold capitalize text-gray-400"
    >
      <IconEdit />
      <IconTrash />
    </div>
  </div>
</template>
