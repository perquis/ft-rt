<script setup lang="ts">
import IconEdit from '@/icons/IconEdit.vue';
import IconTrash from '@/icons/IconTrash.vue';
import type { User } from '@/types/user';
import { useRouter } from 'vue-router';

const props = defineProps<User>();
const router = useRouter();

const redirectToEditPage = () => router.push(`/edit/${props.id}`);
const deleteUser = (id: string) => {
  fetch(`http://localhost:3000/users/${id}`, { method: 'DELETE' });
  window.location.reload();
};
</script>

<template>
  <div
    :class="[
      'flex flex-wrap gap-2 rounded-md py-2 pl-4 pr-4 odd:bg-gray-100 sm:items-center sm:gap-0 sm:pr-16',
    ]"
  >
    <div class="flex flex-1 items-center gap-5 sm:gap-0">
      <div class="flex-shrink-0 sm:w-full sm:max-w-28">
        <img
          class="h-10 w-10 overflow-hidden rounded-full object-cover"
          :src="$props.avatar"
        />
      </div>
      <div
        class="flex-1 flex-shrink-0 truncate font-medium capitalize text-gray-700 sm:w-full"
      >
        {{ $props.firstName }} {{ $props.lastName }}
      </div>
    </div>
    <div class="flex-column flex w-fit gap-3 sm:max-w-16 sm:flex-1">
      <button
        class="text-gray-400 duration-200 ease-in-out hover:text-gray-500 focus-visible:text-gray-500"
        @click="redirectToEditPage()"
      >
        <IconEdit />
      </button>
      <button
        class="text-gray-400 duration-200 ease-in-out hover:text-gray-500 focus-visible:text-gray-500"
        @click="deleteUser($props.id!)"
      >
        <IconTrash />
      </button>
    </div>
  </div>
</template>
