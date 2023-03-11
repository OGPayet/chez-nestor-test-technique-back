<script setup lang="ts">
import { IApartment, IApartmentFormData } from "@/types";
import { useUserStore } from "@/store/user";

definePageMeta({
  middleware: ["auth"],
});

const route = useRoute();

const apartmentData: IApartment = {
  id: parseInt(route.query.id as string),
  title: route.query.title as string,
  titleSlug: route.query.title as string,
  imageSrc: route.query.imageSrc as string,
  price: parseInt(route.query.price as string),
  address: route.query.address as string,
  numberOfParkingSpaces: parseInt(route.query.numberOfParkingSpaces as string),
  numberOfBathrooms: parseInt(route.query.numberOfBathrooms as string),
  numberOfBedrooms: parseInt(route.query.numberOfBedrooms as string),
  area: parseInt(route.query.numberOfBedrooms as string),
  pricePerSquareMeter: parseInt(route.query.numberOfBedrooms as string),
};

const userStore = useUserStore();

const booking = async (bookingData: IApartmentFormData) => {
  try {
    const result = await $fetch("/booking", {
      method: "POST",
      baseURL: "http://localhost:4000",
      headers: {
        Authorization: `Bearer ${userStore.jwt}`,
      },
      body: {
        ...bookingData,
        userId: userStore.userData.id,
        apartmentId: apartmentData.id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
</script>

<template>
  <div class="py-20 px-20">
    <Apartment
      :id="apartmentData.id"
      :title="apartmentData.title"
      :title-slug="apartmentData.titleSlug"
      :image-src="apartmentData.imageSrc"
      :price="apartmentData.price"
      :address="apartmentData.address"
      :number-of-bathrooms="apartmentData.numberOfBathrooms"
      :number-of-bedrooms="apartmentData.numberOfBedrooms"
      :number-of-parking-spaces="apartmentData.numberOfParkingSpaces"
      :area="apartmentData.area"
      :price-per-square-meter="apartmentData.pricePerSquareMeter"
    ></Apartment>
    <ApartmentForm @formSubmitted="booking"></ApartmentForm>
  </div>
</template>
