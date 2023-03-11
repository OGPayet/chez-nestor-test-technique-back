<script setup lang="ts">
import { IApartmentFormData } from "@/types";
import { DefaultSerializer } from "v8";

const formData: IApartmentFormData = reactive({
  dateOfArrival: "",
  dateOfDeparture: "",
  cleaningService: false,
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
        <p class="font-bold text-4xl">Book a room</p>
        <p clas="mt-5 text-lg">Please fill out all the fields.</p>
      </div>

      <div class="lg:col-span-2">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
          <div class="md:col-span-5">
            <label for="date_of_arrival">Date of arrival</label>
            <input
              type="date"
              name="date_of_arrival"
              id="date_of_arrival"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              value=""
            />
          </div>

          <div class="md:col-span-5">
            <label for="date_of_departure">Date of departure</label>
            <input
              type="date"
              name="date_of_departure"
              id="date_of_departure"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              value=""
            />
          </div>

          <div class="md:col-span-5">
            <div class="inline-flex items-center">
              <input
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

          <div class="md:col-span-5 text-right">
            <div class="inline-flex items-end">
              <button
                @submit="submit"
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
