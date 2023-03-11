import { defineStore } from "pinia";
import { IUser } from "@/types";

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
      } as IUser,
      userBooking: {},
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
      this.userBooking = {};
    },
  },
});
