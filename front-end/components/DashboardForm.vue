<script setup lang="ts">
import { IUser } from "@/types";

const props = defineProps({
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
  state: {
    type: String,
    default: "",
  },
  zipcode: {
    type: String,
    default: "",
  },
});

const formData: IUser = reactive({
  firstName: props.firstName,
  lastName: props.lastName,
  email: props.email,
});

const emit = defineEmits(["formSubmitted"]);

const submit = () => {
  emit("formSubmitted", formData);
};
</script>

<template>
  <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
      <div class="text-gray-600">
        <p class="font-bold text-4xl">Personal Details</p>
        <p class="mt-5 text-lg">Please fill out all the fields.</p>
      </div>

      <div class="lg:col-span-2">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
          <div class="md:col-span-5">
            <label for="full_name">First Name</label>
            <input
              v-model="formData.firstName"
              type="text"
              name="full_name"
              id="full_name"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            />
          </div>

          <div class="md:col-span-5">
            <label for="full_name">Last Name</label>
            <input
              v-model="formData.lastName"
              type="text"
              name="full_name"
              id="full_name"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            />
          </div>

          <div class="md:col-span-5">
            <label for="email">Email Address</label>
            <input
              v-model="formData.email"
              type="text"
              name="email"
              id="email"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              placeholder="email@domain.com"
            />
          </div>

          <div class="md:col-span-5 text-right mt-5">
            <div class="inline-flex items-end">
              <button
                @click="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
