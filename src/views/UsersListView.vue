<script setup lang="ts">
import Divider from '@/components/Divider.vue';
import FlexColumn from '@/components/FlexColumn.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import Title from '@/components/Title.vue';
import PaginateViews from '@/components/users-list/Pagination/PaginateViews.vue';
import SearchBar from '@/components/users-list/SearchBar.vue';
import UsersListTable from '@/components/users-list/UsersListTable.vue';
import IconPlus from '@/icons/IconPlus.vue';
</script>

<template>
  <FlexColumn custom-class="gap-5">
    <Title>User list</Title>

    <main class="w-full rounded bg-white p-4 py-8 shadow-sm">
      <FlexColumn>
        <div class="flex justify-between gap-5">
          <SearchBar />
          <PrimaryButton
            ><span class="pointer-events-none">
              <IconPlus width="20" height="20" /> </span
            >Add User</PrimaryButton
          >
        </div>
      </FlexColumn>

      <Divider />

      <UsersListTable />
    </main>

    <PaginateViews />
  </FlexColumn>
</template>
