<script setup lang="ts">
import IconArrowLeft from '@/icons/IconArrowLeft.vue';
import IconArrowRight from '@/icons/IconArrowRight.vue';
import { getUsersList } from '@/server/actions/get-users-list';
import { ref } from 'vue';
import PaginateButton from './PaginateButton.vue';

const items = ref<number[]>([]);
const currentPage = ref(1);
const totalPages = ref(0);

(async () => {
  const { pages } = await getUsersList();
  items.value = Array.from({ length: pages }, (_, index) => index + 1);
  totalPages.value = pages;
})();

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const paginateTo = (page: number) => {
  currentPage.value = page;
};
</script>

<template>
  <div class="flex w-fit rounded border border-gray-200 bg-white shadow-sm">
    <PaginateButton :disabled="currentPage === 1" @click="prevPage">
      <IconArrowLeft />
    </PaginateButton>

    <template v-for="page in items" :key="page">
      <PaginateButton
        :is-active="page === currentPage"
        :disabled="page === currentPage"
        @click="paginateTo(page)"
        >{{ page }}</PaginateButton
      >
    </template>

    <PaginateButton :disabled="currentPage === totalPages" @click="nextPage">
      <IconArrowRight />
    </PaginateButton>
  </div>
</template>
