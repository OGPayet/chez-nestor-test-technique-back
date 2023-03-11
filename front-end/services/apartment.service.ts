import { IApartment } from "@/types";

export default {
  async getAll(jwt: string): Promise<IApartment[]> {
    return await $fetch("/apartment", {
      method: "GET",
      baseURL: "http://localhost:4000",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  },
};
