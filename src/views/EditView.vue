<script setup lang="ts">
import FlexColumn from '@/shared/ui/FlexColumn.vue';
import InputField from '@/shared/ui/InputField.vue';
import PrimaryButton from '@/shared/ui/PrimaryButton.vue';
import Title from '@/shared/ui/Title.vue';
import IconCamera from '@/icons/IconCamera.vue';
import { getUserById } from '@/server/actions/get-user-by-id';
import { updateUserById } from '@/server/actions/update-user-by-id';
import type { User } from '@/types/user';
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

const user = reactive<User>({
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  avatar: '',
});

const route = useRoute();

(async () => {
  const data = await getUserById(route.params.id as string);
  Object.assign(user, data);
})();

const isChangeAvatar = ref(false);

const updateDetails = (e: Event) => {
  e.preventDefault();

  const data = new FormData(e.target as HTMLFormElement);
  const updatedUser = Object.fromEntries(data.entries());

  updateUserById(user.id!, { ...updatedUser, avatar: user.avatar });
  window.location.reload();
};

const updatePhoto = (e: Event) => {
  e.preventDefault();

  const data = new FormData(e.target as HTMLFormElement);
  const updatedUser = Object.fromEntries(data.entries());

  updateUserById(user.id!, { ...user, ...updatedUser });
  window.location.reload();
};
</script>

<template>
  <FlexColumn custom-class="gap-5">
    <Title>Edit user</Title>

    <main class="flex w-full gap-5">
      <div class="w-full rounded bg-white px-4 pb-4 pt-16 shadow-sm">
        <form class="flex flex-col items-start gap-40" @submit="updateDetails">
          <div class="flex w-full gap-5">
            <InputField name="First-Name" :value="user.firstName" />
            <InputField name="Last-Name" :value="user.lastName" />
          </div>

          <PrimaryButton :rounded="false">Update Details</PrimaryButton>
        </form>
      </div>
      <div
        class="flex w-full max-w-96 flex-col justify-between rounded bg-white p-4 shadow-sm"
      >
        <div class="flex justify-center py-10">
          <img
            class="h-32 w-32 overflow-hidden rounded-full border-2 border-gray-300 object-cover"
            :src="user.avatar"
          />
        </div>

        <button
          class="flex flex-shrink-0 items-center justify-center gap-2 rounded-md border border-gray-700 px-4 py-2 font-medium text-gray-700 duration-200 ease-in-out hover:opacity-50 focus-visible:opacity-50"
          @click="isChangeAvatar = !isChangeAvatar"
          v-show="!isChangeAvatar"
        >
          <IconCamera /> Change Photo
        </button>

        <form v-show="isChangeAvatar" class="flex gap-2" @submit="updatePhoto">
          <input
            class="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus-visible:outline-none sm:text-sm"
            :value="user.avatar"
            name="avatar"
            id="avatar"
          />
          <PrimaryButton :rounded="false">Save</PrimaryButton>
        </form>
      </div>
    </main>
  </FlexColumn>
</template>
