<script setup lang="ts">
import { IApartment } from "@/types";

definePageMeta({
  middleware: ["auth"],
});

const route = useRoute();

const apartmentData: IApartment = {
  title: route.query.title as string,
  imageSrc: route.query.imageSrc as string,
  price: parseInt(route.query.price as string),
  address: route.query.address as string,
  numberOfParkingSpaces: parseInt(route.query.numberOfParkingSpaces as string),
  numberOfBathrooms: parseInt(route.query.numberOfBathrooms as string),
  numberOfBedrooms: parseInt(route.query.numberOfBedrooms as string),
  area: parseInt(route.query.numberOfBedrooms as string),
  pricePerSquareMeter: parseInt(route.query.numberOfBedrooms as string),
};
</script>

<template>
  <div class="py-20 px-20">
    <Apartment
      :title="apartmentData.title"
      :image-src="apartmentData.imageSrc"
      :price="apartmentData.price"
      :address="apartmentData.address"
      :number-of-bathrooms="apartmentData.numberOfBathrooms"
      :number-of-bedrooms="apartmentData.numberOfBedrooms"
      :number-of-parking-spaces="apartmentData.numberOfParkingSpaces"
      :area="apartmentData.area"
      :price-per-square-meter="apartmentData.pricePerSquareMeter"
    ></Apartment>
    <ApartmentForm></ApartmentForm>
  </div>
</template>
