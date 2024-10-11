import { onMounted, onUnmounted } from 'vue';

export function useEventListener(
  target: Element,
  event: keyof DocumentEventMap,
  callback: () => void,
) {
  onMounted(() => target.addEventListener(event, callback));
  onUnmounted(() => target.removeEventListener(event, callback));
}
