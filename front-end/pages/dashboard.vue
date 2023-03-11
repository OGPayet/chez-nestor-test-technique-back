<script setup lang="ts">
import { IBooking, IUser } from "@/types";
import { UserService, BookingService } from "@/services";
import { useUserStore } from "@/store/user";

definePageMeta({
  middleware: ["auth"],
});

const userStore = useUserStore();

const userData: IUser = reactive({
  ...userStore.userData,
});

const saveData = async (data: IUser) => {
  try {
    const result: IUser = await UserService.update(userStore.jwt, {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    });

    userStore.userData = { ...result };
  } catch (err) {
    console.log(err);
  }
};

const cancelBooking = async () => {
  if (userBooking.value?.id) {
    try {
      await BookingService.delete(userStore.jwt, userBooking.value.id);
      userBooking.value = null;
    } catch (err) {
      console.log(err);
    }
  }
};

const userBooking: Ref<IBooking | null> = ref(null);

onMounted(async () => {
  if (userStore.userData?.id) {
    try {
      userBooking.value = await BookingService.getByUserId(
        userStore.jwt,
        userStore.userData.id
      );
    } catch (err) {
      console.log(err);
    }
  }
});
</script>

<template>
  <div class="py-20 px-20">
    <DashboardForm
      @formSubmitted="saveData"
      :firstName="userData.firstName"
      :lastName="userData.lastName"
      :email="userData.email"
    ></DashboardForm>
    <div v-if="userBooking">
      <h2 class="mt-20 mb-7 text-4xl font-bold">Your booking</h2>
      <p>
        <strong>Date of arrival:</strong>
        {{ new Date(userBooking.dateOfArrival).toDateString() }}
      </p>
      <p>
        <strong>Date of departure:</strong>
        {{ new Date(userBooking.dateOfDeparture).toDateString() }}
      </p>
      <p>
        <strong>Cleaning service:</strong>
        {{ userBooking.cleaningService ? "included" : "not included" }}
      </p>
      <Apartment
        v-if="userBooking && userBooking.apartment"
        class="mt-7"
        :id="userBooking.apartment.id"
        :image-src="userBooking.apartment.imageSrc"
        :title="userBooking.apartment.title"
        :title-slug="userBooking.apartment.titleSlug"
        :address="userBooking.apartment.address"
        :price="userBooking.apartment.price"
        :area="userBooking.apartment.area"
        :price-per-square-meter="userBooking.apartment.pricePerSquareMeter"
        :number-of-bathrooms="userBooking.apartment.numberOfBathrooms"
        :number-of-bedrooms="userBooking.apartment.numberOfBedrooms"
        :number-of-parking-spaces="userBooking.apartment.numberOfParkingSpaces"
      >
      </Apartment>
      <button
        @click="cancelBooking"
        class="float-right mt-5 bg-red-500 hover:bg-red-700 text-white text-xl font-bold py-2 px-4 rounded"
      >
        Cancel booking
      </button>
    </div>
  </div>
</template>
