<script setup lang="ts">
import { useMessageStore } from '@/stores/message';
import type { Event } from '@/types';
import { toRefs } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps<{
  event: Event
  id: String
}>()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props);

const router = useRouter();
const store = useMessageStore();
const edit = () => {
    store.updateMessage('The data has been updated');
    setTimeout(() => {
      store.resetMessage()
    }, 3000);
    router.push({ name: 'event-detail-view', params: { id: props.event.id } });
}
</script>

<template>
    <p>Edit event here</p>
    <button @click="edit">Edit</button>
</template>