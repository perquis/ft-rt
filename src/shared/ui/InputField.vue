<script setup lang="ts">
import { computed } from 'vue';
import FlexColumn from './FlexColumn.vue';

const props = defineProps<{
  name: string;
  value: string;
  placeholder?: string;
}>();

const formatedName = computed(() => {
  const key = props.name.replace('-', '');
  return key.charAt(0).toLocaleLowerCase() + key.slice(1);
});
</script>

<template>
  <FlexColumn custom-class="gap-2 w-full">
    <label
      :for="name"
      class="block text-sm font-medium capitalize text-gray-700"
    >
      {{ name.replace('-', ' ') }}
    </label>
    <input
      type="text"
      :id="name"
      :name="formatedName"
      :value="value"
      :placeholder="placeholder"
      minlength="3"
      class="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus-visible:outline-none sm:text-sm"
    />
  </FlexColumn>
</template>
