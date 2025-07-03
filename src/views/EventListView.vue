<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
import EventCategoryAndOrganizer from '@/components/EventCategoryAndOrganizer.vue';
import EventService from '@/services/EventService';
import type { Event } from '@/types';
import { onMounted, ref } from 'vue';

const events = ref<Event[]>([]);

onMounted(() => {
  EventService.getEvents()
    .then((response) => {
      events.value = response.data;
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
})

</script>

<template>
  <h1>Events For Good</h1>
  <!-- new element -->
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
  <div class="event-category-and-organizers">
    <EventCategoryAndOrganizer v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.event-category-and-organizers {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>