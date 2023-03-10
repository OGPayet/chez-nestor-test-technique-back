import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user-store",
  persist: true,
  state: () => {
    return {
      jwt: "",
      id: "",
      email: "",
      firstName: "",
      lastName: "",
      role: "",
    };
  },
  actions: {
    setJwt(value: string) {
      this.jwt = value;
    },
  },
});
