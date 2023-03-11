<script setup lang="ts">
import { IDashboardFormData, IUserData } from "@/types";
import { useUserStore } from "@/store/user";

definePageMeta({
  middleware: ["auth"],
});

const userStore = useUserStore();

const userData = reactive({
  ...userStore.userData,
});

const saveData = async (data: IDashboardFormData) => {
  try {
    const result: IUserData = await $fetch("/user", {
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

    userStore.userData = { ...result };
  } catch (err) {
    console.log(err);
  }
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
