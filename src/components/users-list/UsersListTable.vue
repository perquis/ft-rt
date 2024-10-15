<script setup lang="ts">
import UserItem from '@/components/users-list/UserItem.vue';
import { getUsersAll } from '@/server/actions/get-users-all';
import { getUsersList } from '@/server/actions/get-users-list';
import { useSearchStore } from '@/stores/search';
import type { User } from '@/types/user';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import FlexColumn from '../FlexColumn.vue';
import UserHeading from './UserHeading.vue';

const users = ref<User[]>([]);
const route = useRoute();

const store = useSearchStore();

(async () => {
  const { data } = await getUsersList(Number(route.params.page) || 1);
  users.value = data;
})();

watch(
  () => route.params.page,
  newPage => {
    (async () => {
      const { data } = await getUsersList(Number(newPage) || 1);
      users.value = data;
    })();
  },
);

watch(
  () => store.search,
  newSearch => {
    (async () => {
      if (!newSearch) {
        const { data } = await getUsersList(Number(route.params.page) || 1);
        users.value = data;
        return;
      }

      const data = await getUsersAll();
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
