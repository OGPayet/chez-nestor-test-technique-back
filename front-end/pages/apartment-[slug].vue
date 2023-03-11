<script setup lang="ts">
import { IApartment, IApartmentFormData } from "@/types";
import { BookingService, ApartmentService } from "@/services";
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
  isBooked: !!parseInt(route.query.isBooked as string),
};

const userStore = useUserStore();
const bookedWithSuccess: Ref<boolean> = ref<boolean>(false);
const errorMessage: Ref<string> = ref<string>("");

const booking = async (bookingData: IApartmentFormData) => {
  if (userStore.userData?.id && apartmentData.id) {
    try {
      userStore.userBooking = await BookingService.create(userStore.jwt, {
        ...bookingData,
        userId: userStore.userData.id,
        apartmentId: apartmentData.id,
      });
      bookedWithSuccess.value = true;
      await ApartmentService.update(userStore.jwt, {
        ...apartmentData,
        isBooked: true,
      });
    } catch (err: any) {
      if (err.data?.message) {
        if (err.data.message === "user_already_have_booking") {
          errorMessage.value =
            "You already have a booking, you should first cancel your booking if you want to book another room.";
        } else {
          errorMessage.value = err.data?.message;
        }
      }
    }
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
      :is-booked="apartmentData.isBooked"
    ></Apartment>
    <ApartmentForm
      @formSubmitted="booking"
      :bookedWithSuccess="bookedWithSuccess"
      :errorMessage="errorMessage"
    ></ApartmentForm>
  </div>
</template>
