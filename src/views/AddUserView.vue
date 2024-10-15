<script setup lang="ts">
import FlexColumn from '@/components/FlexColumn.vue';
import InputField from '@/components/InputField.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import Title from '@/components/Title.vue';
import { createUser } from '@/server/actions/create-user';
import type { User } from '@/types/user';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const user = reactive<User>({
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  avatar: '',
});

const router = useRouter();

const addNewUser = (e: Event) => {
  e.preventDefault();

  const data = new FormData(e.target as HTMLFormElement);
  const newUser = Object.fromEntries(data.entries());

  console.log(newUser);

  createUser(newUser);
  router.push('/');
};
</script>

<template>
  <FlexColumn custom-class="gap-5">
    <Title>Add user</Title>

    <form class="flex w-full gap-5" @submit="addNewUser">
      <div class="w-full rounded bg-white px-4 pb-4 pt-16 shadow-sm">
        <div class="flex flex-col items-start gap-40">
          <div class="flex w-full gap-5">
            <InputField
              name="First-Name"
              value=""
              placeholder="Enter name"
              required
            />
            <InputField
              name="Last-Name"
              value=""
              placeholder="Enter surname"
              required
            />
          </div>

          <PrimaryButton :rounded="false">Update Details</PrimaryButton>
        </div>
      </div>
      <div
        class="flex w-full max-w-96 flex-col justify-between rounded bg-white p-4 shadow-sm"
      >
        <div class="flex justify-center py-10">
          <img
            class="h-32 w-32 overflow-hidden rounded-full border-2 border-gray-300 object-cover"
            :src="
              user.avatar ||
              'https://www.omnesinfluencers.com/images/user-blank.png'
            "
          />
        </div>

        <div class="flex gap-2">
          <input
            class="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus-visible:outline-none sm:text-sm"
            :value="user.avatar"
            name="avatar"
            id="avatar"
            required
            minlength="3"
          />
        </div>
      </div>
    </form>
  </FlexColumn>
</template>
