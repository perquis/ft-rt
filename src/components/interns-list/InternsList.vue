<script setup lang="ts">
import ItemRow from '@/components/interns-list/ItemRow.vue';
import type { Intern } from '@/interfaces/intern';
import { client } from '@/services/client';
import FlexColumn from '@/shared/ui/FlexColumn.vue';
import { useSearchStore } from '@/stores/search';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Heading from './Heading.vue';

const users = ref<Intern[]>([]);
const route = useRoute();

const store = useSearchStore();

onMounted(async () => {
  try {
    const { data } = await client.getInterns(Number(route.params.page) || 1);
    users.value = data.data;
  } catch (error) {
    console.error(error);
  }
});

watch(
  () => route.params.page,
  async newPage => {
    try {
      const { data } = await client.getInterns(Number(newPage) || 1);
      users.value = data.data;
    } catch (error) {
      console.error(error);
    }
  },
);

watch(
  () => store.search,
  async newSearch => {
    try {
      if (!newSearch) {
        const { data } = await client.getInterns(
          Number(route.params.page) || 1,
        );
        users.value = data.data;
        return;
      }

      const { data } = await client.getInternsAll();
      const newUsers = data.filter(user =>
        `${user.firstName} ${user.lastName}`
          .toLowerCase()
          .startsWith(newSearch.toLowerCase()),
      );

      users.value = newUsers;
    } catch (error) {
      console.error(error);
    }
  },
);
</script>

<template>
  <FlexColumn>
    <Heading />
    <FlexColumn>
      <template v-for="(user, index) in users" :key="user.id">
        <ItemRow
          :first-name="user.firstName"
          :last-name="user.lastName"
          :avatar="user.avatar"
          :id="user.id"
          :index="index"
          :interns-length="users.length"
        />
      </template>
    </FlexColumn>
  </FlexColumn>
</template>
