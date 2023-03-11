<script setup lang="ts">
import { IApartment } from "@/types";
import { useUserStore } from "@/store/user";

definePageMeta({
  middleware: ["auth"],
});

const apartments: Ref<IApartment[]> = ref([]);
const userStore = useUserStore();

onMounted(async () => {
  apartments.value = await $fetch("/apartment", {
    method: "GET",
    baseURL: "http://localhost:4000",
    headers: {
      Authorization: `Bearer ${userStore.jwt}`,
    },
  });
});
</script>

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full mt-20 px-20"
  >
    <Apartment
      v-for="(apartment, index) in apartments"
      :key="index"
      :title="apartment.title"
      :imageSrc="apartment.imageSrc"
      :imageAlt="apartment.imageAlt"
      :price="apartment.price"
      :address="apartment.address"
      :numberOfParkingSpaces="apartment.numberOfParkingSpaces"
      :numberOfBathrooms="apartment.numberOfBathrooms"
      :numberOfBedrooms="apartment.numberOfBedrooms"
      :isFeatured="apartment.isFeatured"
      :isCondominium="apartment.isCondominium"
      :stateOfFurniture="apartment.stateOfFurniture"
      :area="apartment.area"
      :pricePerSquareMeter="apartment.pricePerSquareMeter"
    ></Apartment>
  </div>
</template>
