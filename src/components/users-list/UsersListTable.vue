<script setup lang="ts">
import UserItem from '@/components/users-list/UserItem.vue';
import type { User } from '@/types/user';
import { ref } from 'vue';
import FlexColumn from '../FlexColumn.vue';
import UserHeading from './UserHeading.vue';

const users = ref<User[]>([]);

fetch('http://localhost:3000/users?_start=0&_end=8')
  .then(res => res.json())
  .then(data => users.value.push(...data));
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
