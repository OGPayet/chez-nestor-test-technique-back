<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div class="py-20 px-20">
    <ApartmentForm></ApartmentForm>
  </div>
</template>
