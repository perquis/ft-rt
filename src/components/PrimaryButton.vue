<script setup lang="ts">
defineProps({
  rounded: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <button
    :class="[
      'flex flex-shrink-0 items-center justify-center gap-2 bg-emerald-600 px-4 py-2 font-medium text-white duration-200 ease-in-out hover:opacity-90 focus-visible:opacity-90',
      {
        'rounded-full': rounded,
        'rounded-md': !rounded,
      },
    ]"
  >
    <slot></slot>
  </button>
</template>
