import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user-store",
  persist: true,
  state: () => {
    return {
      jwt: "",
      userData: {
        id: 0,
        email: "",
        firstName: "",
        lastName: "",
        role: "",
        createdAt: "",
        updatedAt: "",
      },
    };
  },
  actions: {
    clearUserData() {
      this.userData.id = 0;
      this.userData.email = "";
      this.userData.firstName = "";
      this.userData.lastName = "";
      this.userData.role = "";
      this.userData.createdAt = "";
      this.userData.updatedAt = "";
    },
  },
});
