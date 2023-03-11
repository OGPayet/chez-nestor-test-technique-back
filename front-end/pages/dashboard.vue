<script setup lang="ts">
import { IBooking, IUser, IApartmentFormData } from "@/types";
import { UserService, BookingService } from "@/services";
import { useUserStore } from "@/store/user";

definePageMeta({
  middleware: ["auth"],
});

const userStore = useUserStore();

const userBooking: Ref<IBooking | null> = ref(null);

onMounted(async () => {
  if (userStore.userData?.id) {
    try {
      userBooking.value = await BookingService.getByUserId(
        userStore.jwt,
        userStore.userData.id
      );
      bookingFormData.dateOfArrival = new Date(userBooking.value.dateOfArrival)
        .toISOString()
        .substring(0, 10);
      bookingFormData.dateOfDeparture = new Date(
        userBooking.value.dateOfDeparture
      )
        .toISOString()
        .substring(0, 10);
      bookingFormData.cleaningService = userBooking.value.cleaningService;

      console.log(bookingFormData);
    } catch (err: any) {
      console.log(err);
    }
  }
});

const userData: IUser = reactive({
  ...userStore.userData,
});

const savedWithSuccess: Ref<boolean> = ref(false);
const errorMessage: Ref<string> = ref("");

const saveData = async (data: IUser) => {
  try {
    const result: IUser = await UserService.update(userStore.jwt, {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    });

    userStore.userData = { ...result };
    savedWithSuccess.value = true;
  } catch (err: any) {
    if (err.data?.message) {
      errorMessage.value = err.data.message;
    }
  }
};

const bookingFormData: IApartmentFormData = reactive<IApartmentFormData>({
  dateOfArrival: "",
  dateOfDeparture: "",
  cleaningService: false,
});
const bookingUpdatedWithSuccess: Ref<boolean> = ref<boolean>(false);
const updateBookingErrorMessage: Ref<string> = ref<string>("");

const updateBooking = async () => {
  try {
    await BookingService.update(userStore.jwt, {
      id: userBooking.value?.id,
      dateOfArrival: new Date(bookingFormData.dateOfArrival),
      dateOfDeparture: new Date(bookingFormData.dateOfDeparture),
      cleaningService: bookingFormData.cleaningService,
    });
    bookingUpdatedWithSuccess.value = true;
  } catch (err: any) {
    if (err.data?.message) {
      updateBookingErrorMessage.value = err.data?.message;
    }
  }
};

const cancelBookingWithSuccess: Ref<boolean> = ref<boolean>(false);
const cancelBookingErrorMessage: Ref<string> = ref<string>("");

const cancelBooking = async () => {
  if (userBooking.value?.id) {
    try {
      await BookingService.delete(userStore.jwt, userBooking.value.id);
      userBooking.value = null;
      cancelBookingWithSuccess.value = true;
    } catch (err: any) {
      if (err.data?.message) {
        cancelBookingErrorMessage.value = err.data?.message;
      }
    }
  }
};
</script>

<template>
  <div class="py-20 px-20">
    <DashboardForm
      @formSubmitted="saveData"
      :firstName="userData.firstName"
      :lastName="userData.lastName"
      :email="userData.email"
      :savedWithSuccess="savedWithSuccess"
      :errorMessage="errorMessage"
    ></DashboardForm>
    <div
      v-if="cancelBookingWithSuccess"
      class="mt-7 px-8 py-4 bg-green-400 text-white flex justify-between rounded"
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
        <p>Your booking was canceled with success!</p>
      </div>
    </div>
    <div
      v-if="cancelBookingErrorMessage"
      class="mt-7 px-8 py-4 bg-red-400 text-white flex justify-between rounded"
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
        <p>{{ cancelBookingErrorMessage }}</p>
      </div>
    </div>
    <div v-if="userBooking">
      <h2 class="mt-20 mb-7 text-4xl font-bold">Your booking</h2>
      <div class="md:col-span-5">
        <label for="date_of_arrival"><strong>Date of arrival</strong></label>
        <input
          v-model="bookingFormData.dateOfArrival"
          type="date"
          name="date_of_arrival"
          id="date_of_arrival"
          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
        />
      </div>
      <div class="md:col-span-5">
        <label for="date_of_departure"
          ><strong>Date of departure</strong></label
        >
        <input
          v-model="bookingFormData.dateOfDeparture"
          type="date"
          name="date_of_departure"
          id="date_of_departure"
          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
        />
      </div>
      <div class="md:col-span-5 mt-5">
        <div class="inline-flex items-center">
          <input
            v-model="bookingFormData.cleaningService"
            type="checkbox"
            name="billing_same"
            id="billing_same"
            class="form-checkbox"
          />
          <label for="billing_same" class="ml-2"
            ><strong>Subscribe to the cleaning service</strong></label
          >
        </div>
      </div>
      <div
        v-if="bookingUpdatedWithSuccess"
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
          <p>Booking updated with success!</p>
        </div>
      </div>
      <div
        v-if="updateBookingErrorMessage"
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
          <p>{{ updateBookingErrorMessage }}</p>
        </div>
      </div>
      <button
        @click="updateBooking"
        class="float-right mt-5 bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded"
      >
        Update
      </button>
      <Apartment
        v-if="userBooking && userBooking.apartment"
        class="mt-24"
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
        class="float-right mt-7 bg-red-500 hover:bg-red-700 text-white text-xl font-bold py-2 px-4 rounded"
      >
        Cancel booking
      </button>
    </div>
  </div>
</template>
