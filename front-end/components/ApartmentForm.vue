<script setup lang="ts">
import { IApartmentFormData } from "@/types";

const props = defineProps({
  bookedWithSuccess: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: "",
  },
});

const formData: IApartmentFormData = reactive({
  dateOfArrival: "",
  dateOfDeparture: "",
  cleaningService: false,
});

const emit = defineEmits(["formSubmitted"]);

const formErrorMessage: Ref<string> = ref<string>("");

const submit = () => {
  if (formData.dateOfArrival && formData.dateOfDeparture) {
    formErrorMessage.value = "";
    emit("formSubmitted", {
      dateOfArrival: new Date(formData.dateOfArrival),
      dateOfDeparture: new Date(formData.dateOfDeparture),
      cleaningService: formData.cleaningService,
    });
  } else {
    formErrorMessage.value = "Please indicate an arrival and a departure date.";
  }
};
</script>

<template>
  <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
      <div class="text-gray-600">
        <p class="font-bold text-4xl">Book a room</p>
        <p clas="mt-5 text-lg">Please fill out all the fields.</p>
      </div>

      <div class="lg:col-span-2">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
          <div class="md:col-span-5">
            <label for="date_of_arrival">Date of arrival</label>
            <input
              v-model="formData.dateOfArrival"
              type="date"
              name="date_of_arrival"
              id="date_of_arrival"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            />
          </div>

          <div class="md:col-span-5">
            <label for="date_of_departure">Date of departure</label>
            <input
              v-model="formData.dateOfDeparture"
              type="date"
              name="date_of_departure"
              id="date_of_departure"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            />
          </div>

          <div class="md:col-span-5">
            <div class="inline-flex items-center">
              <input
                v-model="formData.cleaningService"
                type="checkbox"
                name="billing_same"
                id="billing_same"
                class="form-checkbox"
              />
              <label for="billing_same" class="ml-2"
                >Subscribe to the cleaning service</label
              >
            </div>
          </div>

          <div
            v-if="bookedWithSuccess"
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
              <p>
                Room booked with success! You can go to your Dashboard to see
                your booking.
              </p>
            </div>
          </div>

          <div
            v-if="errorMessage || formErrorMessage"
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
              <p v-if="errorMessage">{{ errorMessage }}</p>
              <p v-else>{{ formErrorMessage }}</p>
            </div>
          </div>

          <div class="md:col-span-5 text-right">
            <div class="inline-flex items-end">
              <button
                @click="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
