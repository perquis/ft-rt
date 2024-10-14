<script setup lang="ts">
import IconEdit from '@/icons/IconEdit.vue';
import IconTrash from '@/icons/IconTrash.vue';
import type { User } from '@/types/user';
import { useRouter } from 'vue-router';

const props = defineProps<User>();
const router = useRouter();

const redirectToEditPage = () => router.push(`/edit/${props.id}`);
const deleteUser = (id: string) =>
  fetch(`http://localhost:3000/users/${id}`, { method: 'DELETE' });
</script>

<template>
  <div
    :class="[
      'flex flex-wrap gap-2 rounded-md py-2 pl-4 pr-4 sm:items-center sm:gap-0 sm:pr-16',
      $props.index! % 2 === 0 ? 'bg-gray-100' : '',
    ]"
  >
    <div class="flex flex-1 items-center gap-5 sm:gap-0">
      <div class="flex-shrink-0 sm:w-full sm:max-w-28">
        <img
          class="h-10 w-10 overflow-hidden rounded-full object-cover"
          :src="$props.avatar"
          :alt="$props.fullname"
        />
      </div>
      <div
        class="flex-1 flex-shrink-0 truncate font-medium capitalize text-gray-700 sm:w-full"
      >
        {{ $props.fullname }}
      </div>
    </div>
    <div
      class="flex-column flex w-fit gap-3 text-gray-400 sm:max-w-16 sm:flex-1"
    >
      <button @click="redirectToEditPage()"><IconEdit /></button>
      <button @click="deleteUser($props.id!)"><IconTrash /></button>
    </div>
  </div>
</template>
