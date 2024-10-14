<script setup lang="ts">
defineProps<{
  isActive?: boolean;
}>();
</script>

<template>
  <button
    :class="[
      'flex h-8 w-8 items-center justify-center text-emerald-700 disabled:text-gray-800',
      $props.isActive
        ? 'bg-emerald-600 !text-white'
        : 'border-r border-gray-200',
    ]"
  >
    <slot></slot>
  </button>
</template>
