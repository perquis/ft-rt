<script setup lang="ts">
import IconCamera from '@/icons/IconCamera.vue';
import type { Intern } from '@/interfaces/intern';
import { client } from '@/services/client';
import FlexColumn from '@/shared/ui/FlexColumn.vue';
import InputField from '@/shared/ui/InputField.vue';
import PrimaryButton from '@/shared/ui/PrimaryButton.vue';
import Title from '@/shared/ui/Title.vue';
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const user = reactive<Intern>({
  id: '',
  firstName: '',
  lastName: '',
  avatar: '',
});

const route = useRoute();
const router = useRouter();

const isEditMode = route.path.includes('edit');
const title = isEditMode ? 'Edit user' : 'Add user';
const isChangeAvatar = ref(false);

onMounted(async () => {
  try {
    if (isEditMode) {
      const data = await client.getInternById(route.params.id as string);
      Object.assign(user, data.data);
    }
  } catch (error) {
    console.error(error);
  }
});

const handleSubmit = (e: Event) => {
  e.preventDefault();

  const data = new FormData(e.target as HTMLFormElement);
  const userData = Object.fromEntries(data.entries());

  try {
    if (isEditMode) {
      client.updateIntern(user.id!, { ...userData });
      window.location.reload();
    } else {
      client.addIntern(userData as unknown as Intern);
      router.push('/');
    }
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <FlexColumn custom-class="gap-5">
    <Title>{{ title }}</Title>

    <form class="flex w-full flex-col gap-5 lg:flex-row" @submit="handleSubmit">
      <div class="w-full rounded bg-white px-4 pb-4 pt-16 shadow-sm">
        <div class="flex flex-col items-start gap-40">
          <div class="flex w-full flex-col gap-5 sm:flex-row">
            <InputField
              name="First-Name"
              :value="user.firstName"
              placeholder="Enter name"
            />
            <InputField
              name="Last-Name"
              :value="user.lastName"
              placeholder="Enter surname"
            />
          </div>
          <PrimaryButton :rounded="false">Update Details</PrimaryButton>
        </div>
      </div>
      <div
        class="flex w-full flex-col justify-between rounded bg-white p-4 shadow-sm lg:max-w-96"
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
        <button
          class="flex flex-shrink-0 items-center justify-center gap-2 rounded-md border border-gray-700 px-4 py-2 font-medium text-gray-700 duration-200 ease-in-out hover:opacity-50 focus-visible:opacity-50"
          @click="isChangeAvatar = !isChangeAvatar"
          v-show="!isChangeAvatar && isEditMode"
          type="button"
        >
          <IconCamera /> Change Photo
        </button>

        <input
          v-if="(isEditMode && isChangeAvatar) || !isEditMode"
          class="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus-visible:outline-none sm:text-sm"
          :value="user.avatar"
          name="avatar"
          id="avatar"
          required
          tabindex="1"
          placeholder="Enter avatar URL"
        />
      </div>
    </form>
  </FlexColumn>
</template>
