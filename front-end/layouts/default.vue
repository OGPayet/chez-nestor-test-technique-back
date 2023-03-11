<script setup lang="ts">
import { useUserStore } from "@/store/user";

const userStore = useUserStore();
</script>

<template>
  <div>
    <Navbar v-if="userStore.jwt" />
    <slot />
  </div>
</template>
