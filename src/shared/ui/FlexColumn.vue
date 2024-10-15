<script setup lang="ts">
const props = defineProps<{
  customClass?: string;
}>();
</script>

<template>
  <div :class="['flex', 'flex-col', props.customClass]">
    <slot></slot>
  </div>
</template>
