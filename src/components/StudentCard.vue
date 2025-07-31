<script setup lang="ts">
import type { Student } from '@/types';
defineProps<{
  student: Student;
}>();
</script>

<template>
  <div class="p-[20px] w-[250px] cursor-pointer border  mb-[18px] border-gray-700 hover:scale-101 hover:shadow-sp">
    <h2><span>{{ student.name }}</span> <span>{{ student.surname }}</span></h2>
    <p>{{ student.gpa }}</p>
  </div>
</template>

<style scoped>
/* .student-card {
  padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
}
.student-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
} */
</style>
