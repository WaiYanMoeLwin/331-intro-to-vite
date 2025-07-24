<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
import EventCategoryAndOrganizer from '@/components/EventCategoryAndOrganizer.vue';
import EventService from '@/services/EventService';
import type { Event } from '@/types';
import { computed, onMounted, ref, watchEffect } from 'vue';

const events = ref<Event[] | null>(null);
const totalEvents = ref(0);

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    required: true
  }
})

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / perPage.value);
  return page.value < totalPages
})
const page = computed(() => props.page)
const perPage = ref(props.perPage);
  
const updatePageSize = (event: any) => {
  window.location.href = `/?perPage=${perPage.value}&page=${1}`;
}

onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(perPage.value, page.value)
    .then((response) => {
      events.value = response.data;
      totalEvents.value = response.headers['x-total-count'];
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
  })
})

</script>

<template>
  <label for="pageSize">Page Size:</label>
  <input id="pageSize" type="number" v-model.number="perPage" min="1" max="10" @change="updatePageSize" />
  <h1>Events For Good</h1>
  <!-- new element -->
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
  <div class="pagination">
    <RouterLink
      id="page-prev"
      :to="{ name: 'event-list-view', query: { page: page - 1 }}"
      rel="prev"
      v-if = "page != 1"
      >&#60; Prev Page</RouterLink>
    <RouterLink
      id="page-next"
      :to="{ name: 'event-list-view', query: { page: page + 1 }}"
      rel="next"
      v-if="hasNextPage"
      >Next Page &#62;</RouterLink>
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
.pagination {
  display: flex;
  width: 290px;
  justify-self: center;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>