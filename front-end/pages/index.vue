<script setup lang="ts">
import { IApartment } from "@/types";

const apartments: IApartment[] = [
  {
    title: "New Apartment",
    imageSrc: "/images/apartments/apartment-1.jpg",
    imageAlt: "Apartment 1 image",
    price: 100,
    address: "15 Rue Git-le-Coeur",
    numberOfParkingSpaces: 1,
    numberOfBathrooms: 1,
    numberOfBedrooms: 1,
    isFeatured: true,
    isCondominium: true,
    stateOfFurniture: "furnised",
    area: 50,
    pricePerSquareMeter: 50,
  },
  {
    title: "New Apartment",
    imageSrc: "/images/apartments/apartment-2.jpg",
    imageAlt: "Apartment 2 image",
    price: 200,
    address: "33 Place de la Madeleine",
    numberOfParkingSpaces: 2,
    numberOfBathrooms: 2,
    numberOfBedrooms: 2,
    isFeatured: true,
    isCondominium: true,
    stateOfFurniture: "furnised",
    area: 50,
    pricePerSquareMeter: 50,
  },
  {
    title: "New Apartment",
    imageSrc: "/images/apartments/apartment-3.jpg",
    imageAlt: "Apartment 3 image",
    price: 300,
    address: "4 Avenue du General Leclerc",
    numberOfParkingSpaces: 3,
    numberOfBathrooms: 3,
    numberOfBedrooms: 3,
    isFeatured: true,
    isCondominium: true,
    stateOfFurniture: "furnised",
    area: 50,
    pricePerSquareMeter: 50,
  },
  {
    title: "New Apartment",
    imageSrc: "/images/apartments/apartment-4.jpg",
    imageAlt: "Apartment 4 image",
    price: 400,
    address: "50 Boulevard de Picpus",
    numberOfParkingSpaces: 4,
    numberOfBathrooms: 4,
    numberOfBedrooms: 4,
    isFeatured: true,
    isCondominium: true,
    stateOfFurniture: "furnised",
    area: 50,
    pricePerSquareMeter: 50,
  },
  {
    title: "New Apartment",
    imageSrc: "/images/apartments/apartment-5.jpg",
    imageAlt: "Apartment 5 image",
    price: 500,
    address: "52 Boulevard Saint-Germain",
    numberOfParkingSpaces: 5,
    numberOfBathrooms: 5,
    numberOfBedrooms: 5,
    isFeatured: true,
    isCondominium: true,
    stateOfFurniture: "furnised",
    area: 50,
    pricePerSquareMeter: 50,
  },
  {
    title: "New Apartment",
    imageSrc: "/images/apartments/apartment-6.jpg",
    imageAlt: "Apartment 6 image",
    price: 600,
    address: "33 Avenue Corentin Cariou",
    numberOfParkingSpaces: 6,
    numberOfBathrooms: 6,
    numberOfBedrooms: 6,
    isFeatured: true,
    isCondominium: true,
    stateOfFurniture: "furnised",
    area: 50,
    pricePerSquareMeter: 50,
  },
  {
    title: "New Apartment",
    imageSrc: "/images/apartments/apartment-7.jpg",
    imageAlt: "Apartment 7 image",
    price: 700,
    address: "16 Rue Thorel",
    numberOfParkingSpaces: 7,
    numberOfBathrooms: 7,
    numberOfBedrooms: 7,
    isFeatured: true,
    isCondominium: true,
    stateOfFurniture: "furnised",
    area: 50,
    pricePerSquareMeter: 50,
  },
  {
    title: "New Apartment",
    imageSrc: "/images/apartments/apartment-8.jpg",
    imageAlt: "Apartment 8 image",
    price: 800,
    address: "5 Rue des Petits Hotels",
    numberOfParkingSpaces: 8,
    numberOfBathrooms: 8,
    numberOfBedrooms: 8,
    isFeatured: true,
    isCondominium: true,
    stateOfFurniture: "furnised",
    area: 50,
    pricePerSquareMeter: 50,
  },
];
</script>

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full"
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
