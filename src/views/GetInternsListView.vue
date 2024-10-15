<script setup lang="ts">
import InternsList from '@/components/interns-list/InternsList.vue';
import Pagination from '@/components/pagination/Pagination.vue';
import SearchBar from '@/components/search-bar/SearchBar.vue';
import IconPlus from '@/icons/IconPlus.vue';
import Divider from '@/shared/ui/Divider.vue';
import FlexColumn from '@/shared/ui/FlexColumn.vue';
import PrimaryButton from '@/shared/ui/PrimaryButton.vue';
import Title from '@/shared/ui/Title.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const addUser = () => router.push('/add');
</script>

<template>
  <FlexColumn custom-class="gap-5">
    <Title>User list</Title>

    <main class="w-full rounded bg-white p-4 py-8 shadow-sm">
      <FlexColumn>
        <div class="flex flex-col justify-between gap-5 sm:flex-row">
          <SearchBar />
          <PrimaryButton @click="addUser"
            ><span class="pointer-events-none">
              <IconPlus width="20" height="20" /> </span
            >Add User</PrimaryButton
          >
        </div>
      </FlexColumn>

      <Divider />

      <InternsList />
    </main>

    <Pagination />
  </FlexColumn>
</template>
