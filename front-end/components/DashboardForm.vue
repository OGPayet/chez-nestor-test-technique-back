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
  savedWithSuccess: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
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
              disabled
            />
          </div>

          <div
            v-if="savedWithSuccess"
            class="md:col-span-5 mt-7 px-8 py-4 bg-green-400 text-white flex justify-between rounded"
          >
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7 mr-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                />
              </svg>
              <p>Your personal details were saved with success!</p>
            </div>
          </div>

          <div
            v-if="errorMessage"
            class="md:col-span-5 mt-7 px-8 py-4 bg-red-400 text-white flex justify-between rounded"
          >
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7 mr-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>{{ errorMessage }}</p>
            </div>
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
