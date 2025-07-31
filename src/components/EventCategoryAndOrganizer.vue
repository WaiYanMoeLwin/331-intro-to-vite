<script setup lang="ts">
import type { Event } from '@/types';
defineProps<{
    event: Event;
}>();
</script>

<template>
    <div class="event-category-and-organizer">
        <div class="p-[20px] w-[250px] cursor-pointer border mb-[18px] border-gray-700 hover:scale-101 hover:shadow-sp">
            <p class="text-right">Category: {{ event.category }}</p>
            <p class="text-right">Organizer: {{ event.organizer }}</p>
        </div>
    </div>
</template>

<style scoped>
/* .event-category-and-organizer {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
}
.event-category-and-organizer:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
p {
    text-align: right;
} */
</style>