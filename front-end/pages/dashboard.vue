<script setup lang="ts">
import { IDashboardFormData } from "@/types";
import { useUserStore } from "@/store/user";

const userStore = useUserStore();

const userData = reactive({
  ...userStore.userData,
});

console.log(userData);

const saveData = async (data: IDashboardFormData) => {
  const result = await $fetch("/user", {
    method: "PUT",
    baseURL: "http://localhost:4000",
    headers: {
      Authorization: `Bearer ${userStore.jwt}`,
    },
    body: {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    },
  });

  console.log(result);
};
</script>

<template>
  <div class="py-20 px-20">
    <DashboardForm
      @formSubmitted="saveData"
      :firstName="userData.firstName"
      :lastName="userData.lastName"
      :email="userData.email"
    ></DashboardForm>
  </div>
</template>
