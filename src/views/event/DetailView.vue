<script setup lang="ts">
import { useMessageStore } from '@/stores/message';
import type { Event } from '@/types';
import { storeToRefs } from 'pinia';
import { defineProps, toRefs } from 'vue';
const props = defineProps<{
    event: Event
    id: String
}>()
const { event } = toRefs(props);
const store = useMessageStore();
const { message } = storeToRefs(store);
</script>

<template>
    <div id="flashMessage" v-if="message.includes('update')">
        <h4>{{ message }}</h4>
    </div>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
</template>