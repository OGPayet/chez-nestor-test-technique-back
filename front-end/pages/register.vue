<script setup lang="ts">
import { IRegisterFormData, IToken } from "@/types";
import { AuthService } from "@/services";
import { useUserStore } from "@/store/user";

const router = useRouter();
const userStore = useUserStore();

const formData: IRegisterFormData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});

const errorMessage: Ref<string> = ref("");

const register = async () => {
  try {
    const token: IToken = await AuthService.register({ ...formData });

    userStore.jwt = token?.Authorization;
    userStore.userData = { ...token?.data };

    if (userStore.jwt) {
      router.push({ path: "/" });
    }
  } catch (err: any) {
    if (err.data && err.data.message) {
      err.data.message === "user_already_exist"
        ? (errorMessage.value = "An account already exist with this email.")
        : (errorMessage.value = err.data.message);
    }
  }
};
</script>

<template>
  <section class="flex flex-col md:flex-row h-screen items-center">
    <div
      class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen"
    >
      <img
        src="https://www.chez-nestor.com/social-preview.png"
        alt=""
        class="w-full h-full object-cover"
      />
    </div>

    <div
      class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center"
    >
      <div class="w-full h-100">
        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
          Create your account
        </h1>

        <form class="mt-6" action="#" @submit.prevent="register">
          <div>
            <label class="block text-gray-700">First name</label>
            <input
              v-model="formData.firstName"
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Your first name"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              autofocus
              autocomplete="on"
              required
            />
          </div>

          <div>
            <label class="block text-gray-700">Last name</label>
            <input
              v-model="formData.lastName"
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Your last name"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              autofocus
              autocomplete="on"
              required
            />
          </div>

          <div>
            <label class="block text-gray-700">Email Address</label>
            <input
              v-model="formData.email"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email Address"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              autofocus
              autocomplete="on"
              required
            />
          </div>

          <div class="mt-4">
            <label class="block text-gray-700">Password</label>
            <input
              v-model="formData.password"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              minlength="6"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              required
            />
          </div>

          <div
            v-if="errorMessage"
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
              <p>{{ errorMessage }}</p>
            </div>
          </div>

          <button
            type="submit"
            class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
          >
            Register
          </button>
        </form>

        <hr class="my-6 border-gray-300 w-full" />

        <p class="mt-8">
          Already have an account?
          <NuxtLink
            to="/login"
            class="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Login
          </NuxtLink>
        </p>
      </div>
    </div>
  </section>
</template>
