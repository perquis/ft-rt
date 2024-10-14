<script setup lang="ts">
import UserItem from '@/components/users-list/UserItem.vue';
import { getUsersList } from '@/server/actions/get-users-list';
import type { User } from '@/types/user';
import { ref } from 'vue';
import FlexColumn from '../FlexColumn.vue';
import UserHeading from './UserHeading.vue';

const users = ref<User[]>([]);

(async () => {
  const { data } = await getUsersList();
  users.value = data;
})();
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
