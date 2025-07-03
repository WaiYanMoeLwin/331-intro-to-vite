<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue';
import StudentService from '@/services/StudentService';
import type { Student } from '@/types';
import { onMounted, ref } from 'vue';

const students = ref<Student[]>([]);

onMounted(() => {
    StudentService.getStudents()
        .then((response) => {
        students.value = response.data;
        })
        .catch((error) => {
        console.error("There was an error!", error);
        });
})
</script>

<template>
    <h1>Students</h1>
    <div class="student-list">
        <StudentCard v-for="student in students" :key="student.id" :student="student" />
    </div>
</template>

<style scoped>
  .student-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>