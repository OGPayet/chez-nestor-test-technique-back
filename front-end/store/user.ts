import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user-store",
  persist: true,
  state: () => {
    return {
      jwt: "",
      userData: {
        email: "",
        firstName: "",
        lastName: "",
        role: "",
      },
    };
  },
  actions: {
    clearUserData() {
      this.userData.email = "";
      this.userData.firstName = "";
      this.userData.lastName = "";
      this.userData.role = "";
    },
  },
});
