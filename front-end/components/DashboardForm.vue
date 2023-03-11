<script setup lang="ts">
import { IDashboardFormData } from "@/types";

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

const formData: IDashboardFormData = reactive({
  firstName: props.firstName,
  lastName: props.lastName,
  email: props.email,
  address: props.address,
  city: props.city,
  country: props.country,
  state: props.state,
  zipcode: props.zipcode,
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

          <div class="md:col-span-3">
            <label for="address">Address / Street</label>
            <input
              v-model="formData.address"
              type="text"
              name="address"
              id="address"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              placeholder=""
            />
          </div>

          <div class="md:col-span-2">
            <label for="city">City</label>
            <input
              v-model="formData.city"
              type="text"
              name="city"
              id="city"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              placeholder=""
            />
          </div>

          <div class="md:col-span-2">
            <label for="country">Country / region</label>
            <div
              class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
            >
              <input
                v-model="formData.country"
                name="country"
                id="country"
                placeholder="Country"
                class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
              />
              <button
                tabindex="-1"
                class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
              >
                <svg
                  class="w-4 h-4 mx-2 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <button
                tabindex="-1"
                for="show_more"
                class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
              >
                <svg
                  class="w-4 h-4 mx-2 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </button>
            </div>
          </div>

          <div class="md:col-span-2">
            <label for="state">State / province</label>
            <div
              class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
            >
              <input
                v-model="formData.state"
                name="state"
                id="state"
                placeholder="State"
                class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
              />
              <button
                tabindex="-1"
                class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
              >
                <svg
                  class="w-4 h-4 mx-2 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <button
                tabindex="-1"
                for="show_more"
                class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
              >
                <svg
                  class="w-4 h-4 mx-2 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </button>
            </div>
          </div>

          <div class="md:col-span-1">
            <label for="zipcode">Zipcode</label>
            <input
              v-model="formData.zipcode"
              type="text"
              name="zipcode"
              id="zipcode"
              class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              placeholder=""
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
