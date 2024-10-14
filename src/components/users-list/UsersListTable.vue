<script setup lang="ts">
import UserItem from '@/components/users-list/UserItem.vue';
import { getUsersList } from '@/server/actions/get-users-list';
import type { User } from '@/types/user';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import FlexColumn from '../FlexColumn.vue';
import UserHeading from './UserHeading.vue';

const users = ref<User[]>([]);
const route = useRoute();

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
</script>

<template>
  <FlexColumn>
    <UserHeading />
    <FlexColumn>
      <template v-for="(user, index) in users" :key="user.id">
        <UserItem
          :fullname="user.fullname"
          :avatar="user.avatar"
          :user-id="user.userId"
          :index="index"
        />
      </template>
    </FlexColumn>
  </FlexColumn>
</template>
