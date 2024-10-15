<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import IconArrowLeft from '@/icons/IconArrowLeft.vue';
import IconArrowRight from '@/icons/IconArrowRight.vue';
import type { IPagination } from '@/interfaces/pagination';
import { client } from '@/services/client';
import { onMounted, reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import PaginateButton from './PaginateButton.vue';

const items = ref<number[]>([]);
const state = reactive<IPagination>({
  data: [],
  pages: 0,
  first: 0,
  last: 0,
  items: 0,
  next: null,
  prev: null,
});

const route = useRoute();
const router = useRouter();

const fetchUsersList = async (page: number) => {
  const { data } = await client.getInterns(page);
  Object.assign(state, data);
  items.value = Array.from({ length: state.pages }, (_, index) => index + 1);
};

onMounted(() => {
  fetchUsersList(Math.max(Number(route.params.page) || 1, 1));
});

watch(
  () => route.params.page,
  newPage => {
    fetchUsersList(Math.max(Number(newPage) || 1, 1));
  },
);

const nextPage = () => {
  if (state.next !== null) {
    router.push(`/page/${state.next}`);
  }
};

const prevPage = () => {
  if (state.prev !== null) {
    router.push(`/page/${state.prev}`);
  }
};

const paginateTo = (page: number) => router.push(`/page/${page}`);
</script>

<template>
  <div class="flex w-fit rounded border border-gray-200 bg-white shadow-sm">
    <PaginateButton :disabled="state.prev === null" @click="prevPage">
      <IconArrowLeft />
    </PaginateButton>

    <template v-for="page in items" :key="page">
      <PaginateButton
        :is-active="page === Number($route.params.page || 1)"
        :disabled="page === Number($route.params.page)"
        @click="paginateTo(page)"
        >{{ page }}</PaginateButton
      >
    </template>

    <PaginateButton :disabled="state.next === null" @click="nextPage">
      <IconArrowRight />
    </PaginateButton>
  </div>
</template>
