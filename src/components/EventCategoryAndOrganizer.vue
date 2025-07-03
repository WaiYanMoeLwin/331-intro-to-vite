<script setup lang="ts">
import type { Event } from '@/types';
defineProps<{
    event: Event;
}>();
</script>

<template>
    <div class="event-category-and-organizer">
        <div class="category-and-organizer-card">
            <p>Category: {{ event.category }}</p>
            <p>Organizer: {{ event.organizer }}</p>
        </div>
    </div>
</template>

<style scoped>
.event-category-and-organizer {
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
}
</style>