<script setup lang="ts">
import UserItem from '@/components/UserItem.vue';
import type { Intern } from '@/interfaces/intern';
import { client } from '@/services/client';
import FlexColumn from '@/shared/ui/FlexColumn.vue';
import { useSearchStore } from '@/stores/search';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import UserHeading from './UserHeading.vue';

const users = ref<Intern[]>([]);
const route = useRoute();

const store = useSearchStore();

(async () => {
  const { data } = await client.getInterns(Number(route.params.page) || 1);
  users.value = data.data;
})();

watch(
  () => route.params.page,
  newPage => {
    (async () => {
      const { data } = await client.getInterns(Number(newPage) || 1);
      users.value = data.data;
    })();
  },
);

watch(
  () => store.search,
  newSearch => {
    (async () => {
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
    })();
  },
);
</script>

<template>
  <FlexColumn>
    <UserHeading />
    <FlexColumn>
      <template v-for="user in users" :key="user.id">
        <UserItem
          :first-name="user.firstName"
          :last-name="user.lastName"
          :avatar="user.avatar"
          :id="user.id"
        />
      </template>
    </FlexColumn>
  </FlexColumn>
</template>
